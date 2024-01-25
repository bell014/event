package com.example.event_management.event.EventRepository;

import com.example.event_management.event.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {


}
