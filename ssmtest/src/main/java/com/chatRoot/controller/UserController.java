package com.chatRoot.controller;


import com.chatRoot.model.User;
import com.chatRoot.model.Wu;
import com.chatRoot.service.IUserService;
import com.chatRoot.service.imp.IUserServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.sf.json.JSONObject;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller("userController")
@RequestMapping("/user")
public class UserController {

    ApplicationContext ac = new ClassPathXmlApplicationContext("sql/spring-mybatis.xml");
    IUserServiceImpl iUserService = ac.getBean("userService", IUserServiceImpl.class);

    @Resource
    private IUserService uService;

    @RequestMapping("/showUser.do")
    public void selectUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        long userId = Long.parseLong(request.getParameter("id"));
        User user = this.uService.selectUser(userId);
        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(user));
        response.getWriter().close();
    }

    /**
     * 用户登录
     *
     * @param username
     * @return
     */
    @RequestMapping(value = "/Login", produces = "text/html;charset=UTF-8")

    public @ResponseBody
    String Login(@RequestBody String username) {

        JSONObject jsonObject = JSONObject.fromObject(username);
        String uname = jsonObject.getString("username");
        String password = jsonObject.getString("password");
        System.out.println(jsonObject);
        if (jsonObject == null || uname.equals("") || password.equals("")) {
            return "{\"flag\":\"false\"}";
        }
        Map<String, Object> map = iUserService.findbyname(uname);
        System.out.println(map);

        if (map.get("username").equals(uname) && map.get("password").equals(password)) {
            return "{\"flag\":\"true\"}";
            //返回的都是字符串格式，如果用到if判读，小程序会隐式转换为true，要注意，可以用全等号比较true字符串
        } else {
            return "{\"flag\":\"false\"}";
        }
    }

    /**
     * 用户输入
     *
     * @param item_name
     * @return
     */
    @RequestMapping(value = "/insertinfo", produces = "text/html;charset=UTF-8")
    public @ResponseBody String insertwu(@RequestBody String item_name) {
        JSONObject jsoninsert = JSONObject.fromObject(item_name);
        System.out.println(jsoninsert);
        Wu wu = new Wu();
        wu.setItem_name(jsoninsert.getString("item_name"));
        wu.setOwner(jsoninsert.getString("user_name"));
        wu.setContact(jsoninsert.getString("contact"));
        wu.setItem_type(jsoninsert.getString("item_type"));
        wu.setItem_time(jsoninsert.getString("item_time"));
        wu.setItem_location(jsoninsert.getString("item_location"));
        wu.setLostpost(jsoninsert.getString("lostpost"));
        wu.setTel(jsoninsert.getString("tel"));
        System.out.println(wu.toString());
        iUserService.insertwu(wu);
        return "{\"flag\":\"true\"}";
    }
}
