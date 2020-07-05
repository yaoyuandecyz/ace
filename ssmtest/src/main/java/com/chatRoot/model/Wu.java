package com.chatRoot.model;



public class Wu {

    private  long item_id;
    private  String item_name;
    private  String  owner;
    private  String contact;
    private  String item_time;
    private  String item_location;
    private  String item_type;
    private  String lostpost;
    private  String tel;

    public long getItem_id() {
        return item_id;
    }

    public void setItem_id(long item_id) {
        this.item_id = item_id;
    }
    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }
    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }
    public String getContact() {
        return contact;
    }
    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getItem_time() {
        return item_time;
    }

    public void setItem_time(String item_time) {
        this.item_time = item_time;
    }
    public String getItem_location() {
        return item_location;
    }

    public void setItem_location(String item_location) {
        this.item_location = item_location;
    }
    public String getItem_type() {
        return item_type;
    }

    public void setItem_type(String item_type) {
        this.item_type = item_type;
    }
    public String getLostpost() {
        return lostpost;
    }

    public void setLostpost(String lostpost) {
        this.lostpost = lostpost;
    }
    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }
    @Override
    public String toString() {
        return "Wu{" +
                "item_id=" + item_id +
                ", item_name='" + item_name + '\'' +
                ", owner='" + owner + '\'' +
                ", contact='" + contact + '\'' +
                ", item_time='" + item_time + '\'' +
                ", item_location='" + item_location + '\'' +
                ", item_type='" + item_type + '\'' +
                ", lostpost='" + lostpost + '\'' +
                ", tel='" + tel + '\'' +
                '}';
    }
}
