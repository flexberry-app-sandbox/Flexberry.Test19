package Test1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Запись
 */
@Entity(name = "IISTest1Запись")
@Table(schema = "public", name = "Запись")
public class Zapis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @Column(name = "Комментарий")
    private String комментарий;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "КодЗаписи")
    private Integer кодзаписи;

    @Column(name = "Время")
    private String время;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "zapis", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OkazanieUslug> okazanieuslugs;


    public Zapis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public Integer getКодЗаписи() {
      return кодзаписи;
    }

    public void setКодЗаписи(Integer кодзаписи) {
      this.кодзаписи = кодзаписи;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}