package com.maple.socket.io;

import com.corundumstudio.socketio.SocketIOClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

/**
 * @author <a href=mailto:leihuazhe@gmail.com>maple</a>
 * @since 2018-11-02 12:26 AM
 */
@RestController
@RequestMapping("/hello")
public class EventController {
    private final SocketIoServer ioServer;

    public EventController(SocketIoServer ioServer) {
        this.ioServer = ioServer;
    }

    @RequestMapping("/{message}")
    public String sayWebHello(@PathVariable String message) {
//        ioServer.getServer().getRoomOperations("web").sendEvent(EventType.WEB_HELLO.getName(), message);
//        ioServer.getServer().getBroadcastOperations().sendEvent();
        Collection<SocketIOClient> allClients = ioServer.getServer().getAllClients();
        allClients.forEach(client -> {
            client.sendEvent(EventType.WEB_HELLO.getName(), message);
        });
        return "SUCCESS";
    }
}
