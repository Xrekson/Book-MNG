package book.mng.lib.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import book.mng.lib.Entity.Book;
import java.util.List;


@Repository
public interface BookRepo extends JpaRepository<Book,Integer>{
    @Query("select i from Book i where i.name like :name")
    public List<Book> findByNamereg(@Param("name") String name);
    public List<Book> findByIdAndName(Integer id, String name);
}
