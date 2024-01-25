package com.example.event_management.event.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Date;
import java.sql.Time;

public class EventDto {

    @Column(nullable = false)
    private String eventName;

    private String eventDescription;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.TIME)
    private Time startTime;

    private String category;

    private boolean isPhysical;
    private MultipartFile coverPicture;
    private boolean isinside;

    private String app;
    private String link;

    private String state;
    private String Place_name;
    private String Location_link;
    private String Location_description;


    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isPhysical() {
        return isPhysical;
    }

    public void setPhysical(boolean physical) {
        isPhysical = physical;
    }

    public MultipartFile getCoverPicture() {
        return coverPicture;
    }

    public void setCoverPicture(MultipartFile coverPicture) {
        this.coverPicture = coverPicture;
    }

    public boolean isIsinside() {
        return isinside;
    }

    public void setIsinside(boolean isinside) {
        this.isinside = isinside;
    }

    public String getApp() {
        return app;
    }

    public void setApp(String app) {
        this.app = app;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPlace_name() {
        return Place_name;
    }

    public void setPlace_name(String place_name) {
        Place_name = place_name;
    }

    public String getLocation_link() {
        return Location_link;
    }

    public void setLocation_link(String location_link) {
        Location_link = location_link;
    }

    public String getLocation_description() {
        return Location_description;
    }

    public void setLocation_description(String location_description) {
        Location_description = location_description;
    }
}
