package com.example.event_management.event.Service;


import com.example.event_management.event.Model.Event;

import java.util.List;

public interface Event_service {

    List<Event> getAllEvents();
    void saveEvent(Event event);
    Event getEventById(long id);
    void deleteEventById(long id);

}
