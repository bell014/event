package com.example.event_management.event.Service;


import com.example.event_management.event.EventRepository.EventRepository;
import com.example.event_management.event.Model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Event_service_impl implements  Event_service {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @Override
    public void saveEvent(Event event) {
        this.eventRepository.save(event);
    }

    @Override
    public Event getEventById(long id) {
        Optional<Event> optional = eventRepository.findById(id);
        Event employee = null;
        if (optional.isPresent()) {
            employee = optional.get();
        } else {
            throw new RuntimeException(" Employee not found for id :: " + id);
        }
        return employee;
    }

    @Override
    public void deleteEventById(long id) {
        this.eventRepository.deleteById(id);
    }

}
