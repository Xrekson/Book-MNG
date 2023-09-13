package book.mng.lib.Controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import book.mng.lib.Service.BookServo;
import book.mng.lib.Entity.Book;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMethod;


@RestController
public class Omen {
    @Autowired
    BookServo servo;
    @RequestMapping(value = "/book/getdata",method=RequestMethod.GET)
    public List<Book> getbooks(){
        return servo.getData();
    }
@RequestMapping(value="/book/update", method = RequestMethod.PUT)
public ResponseEntity<?> Update(@RequestBody Map<String, String> data) {
    Integer id = Integer.parseInt(data.get("id"));
    String name = data.get("name");
    String desc = data.get("desc");
    Integer page = Integer.parseInt(data.get("page"));
    Double price = Double.parseDouble(data.get("price"));
    if(servo.updatadata(id, name, desc, page, price)) {
        return new ResponseEntity<>(HttpStatus.OK);
    } else {
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@RequestMapping(value="/book/save", method = RequestMethod.POST)
public ResponseEntity<?> Save(@RequestBody Map<String, String> data) {
    String type = data.get("type");
    String name = data.get("name");
    String desc = data.get("desc");
    Integer page = Integer.parseInt(data.get("page"));
    Double price = Double.parseDouble(data.get("price"));
    try{
        servo.savedata(name, desc, type, page, price);
        return new ResponseEntity<>(HttpStatus.OK);
    }catch(Exception error) {
        return new ResponseEntity<String>(error.toString(),null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}
