package book.mng.lib.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import book.mng.lib.Entity.Book;
import book.mng.lib.Repository.BookRepo;

@Service
public class BookServo {
    @Autowired
    BookRepo repo;
    public void savedata(String name,String desc,String type,Integer page,Double price){
        Book data = new Book();
        data.setType(type);
        data.setName(name);
        data.setDescription(desc);
        data.setPage(page);
        data.setPrice(price);
        repo.save(data);
    }
    public List<Book> getData(){
        return repo.findAll();
    }
    public boolean updatadata(Integer id,String name,String desc,Integer page,Double price){
        Book data = repo.findById(id).get();
        if(data!=null){
            data.setName(name);
            data.setDescription(desc);
            data.setPage(page);
            data.setPrice(price);
            repo.save(data);
            return true;
        }else{
            return false;
        }
    }
    public List<Book> getNamebyBooks(String name){
        return repo.findByNamereg(name);
    }
    public boolean deletedata(Integer id){
        Book data = repo.findById(id).get();
        if(data!=null){
            repo.delete(data);
            return true;
        }else{
            return false;
        }
    }
}
