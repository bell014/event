package com.example.event_management.event.controllers;



import com.example.event_management.event.Model.Event;
import com.example.event_management.event.Model.EventDto;
import com.example.event_management.event.Service.Event_service;
import jakarta.validation.Valid;
import org.springframework.ui.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RequestMapping("/events")
@Controller
public class EventController {

    @Autowired
    private Event_service event_service;


    @GetMapping
    public String viewHomePage(Model model) {

        model.addAttribute("listEvents", event_service.getAllEvents() );
        return "ListEvents";
    }



    @GetMapping("/create")
    public String showCreatePage (Model model) {
        EventDto eventDto = new EventDto ();
        model.addAttribute("eventDto", eventDto);
        return "create_event";
    }
    @PostMapping("/create")
    public String createProduct (
            @Valid @ModelAttribute EventDto eventDto,
            BindingResult result
    ) {
        if (eventDto.getCoverPicture().isEmpty()) {
            result.addError (new FieldError("eventDto", "CoverPicture", "The image file is empty !"));
        }

    // save image file
        MultipartFile image = eventDto.getCoverPicture();

        String storageFileName =  image.getOriginalFilename ();
        try {
            String uploadDir = "src/main/resources/static/uploaded_images/";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories (uploadPath);
            }
            try (InputStream inputStream = image.getInputStream()) {
                Files.copy(inputStream, Paths.get (uploadDir + storageFileName), StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (Exception ex) {
            System.out.println("Exception: "+ ex.getMessage());
        }


       if (result.hasErrors()) {
           return "CreateEvent";

       }


        Event event = new Event();

        event.setEventName(eventDto.getEventName());
        event.setEventDescription(eventDto.getEventDescription());
        event.setStartDate(eventDto.getStartDate());
        event.setStartTime(eventDto.getStartTime());
        event.setCategory(eventDto.getCategory());
        event.setPhysical(eventDto.getPhysical());
        event.setInside(eventDto.getInside());
        event.setApp(eventDto.getApp());
        event.setLink(eventDto.getLink());
        event.setState(eventDto.getState());
        event.setPlace_name(eventDto.getPlace_name());
        event.setLocation_link(eventDto.getLocation_link());
        event.setLocation_description(eventDto.getLocation_description());
        event.setCoverPicture(storageFileName);


event_service.saveEvent(event);

        return "create_event";
    }








    @GetMapping("/deleteEvent/{id}")
    public String deleteEventById(@PathVariable(value = "id") long id) {

        // call delete event method
        this.event_service.deleteEventById(id);
        return "redirect:/";
    }

}
