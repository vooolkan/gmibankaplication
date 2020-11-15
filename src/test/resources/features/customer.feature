@customer

  Feature: Kullanici customer sayfasina gider
    Scenario Outline: Kullanici gecerli kimlik bilgileriyle customer olusturur

      Given Kullanici login sayfasina gider
      And  username textbox kutusuna gecerli username "<username>" girer
      And password textbox kutusuna gecerli password "<password>" girer
      And sign in butonuna tiklayarak giris yapar
      Then kullanici kendi username ini login kisminda gorur

      Examples: Gecerli data girilir
      |username|password|
      |Azizeke47|Mardin4738.|

      @managecustomer

      Scenario:Employee create a new customer sayfasina gider
        Given Employee My operations a tiklar
        And Employee Manage customera tiklar
        And Employee Create a new customera tiklar
        And Employee SSN textboxina tiklar ve gecerli SSN numarsini girer
        And Employee serach boxa tiklar
        And Employee firstname gorur
        And Employee lastname gorur
        And Employee email gorur





