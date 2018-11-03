package com.maple.socket.io;


import lombok.Getter;

/**
 * @author <a href=mailto:leihuazhe@gmail.com>maple</a>
 * @since 2018-11-01 11:33 PM
 */
@Getter
public enum EventType {
    WEB_HELLO(1, "web_hello"),
    DATA_INSERT(1, "insert"),
    DATA_DELETE(2, "delete"),
    DATA_UPDATE(3, "update");

    EventType(int id, String name) {
        this.id = id;
        this.name = name;
    }

    private int id;
    private String name;

}
