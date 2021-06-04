package org.generation.SpringBootAssessment.repository.Entity;

import org.generation.SpringBootAssessment.controller.dto.ItemDTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.sql.Date;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String description;
    private Date targetDate;

    public Item() {}

    //Overloading constructor
    public Item(String title, String description, Date targetDate)
    {
        this.title = title;
        this.description = description;
        this.targetDate = targetDate;

    }

    public Item(ItemDTO itemDto) {

        this.title = itemDto.getTitle();
        this.description = itemDto.getDescription();
        this.targetDate = itemDto.getTargetDate();
    }

    public Integer getId() {return id;}

    public void setId(Integer id) {this.id = id;}

    public String getTitle() {return title;}

    public void setTitle(String title) {this.title = title;}

    public String getDescription() {return description;}

    public void setDescription(String description) {this.description = description;}

    public Date getTargetDate() {return targetDate;}

    public void setTargetDate(Date targetDate) {this.targetDate = targetDate;}

    @Override
    public String toString() {
        return "Item {" + "id = " + id + ", title='" + title + '\'' + ", description'" + description + '\'' + ", targetDate='"
                + targetDate + '}';
    }
}
