<h1>Backend and Frontend:</h1>
<p>Technologies used - NodeJS, AngularCLI, Bootstrap, MySQL</p>
<p>
 How to run the execute projects:<br>
 <ul>
  <li>You need to have a server with mysql on your computer.</li>
  <li>Later, you need to export database.sql to your mysql server.</li>
  <li>After that, open the console, execute this: <strong>git clone</strong> https://github.com/viniciusoliverrs/ProjetoTeste.git.</li>
  <li>Open the backend folder.</li>
  <li>Open the console and write: <strong>nodemon app</strong> to run the project.</li>
  <li>Open the frontend folder.</li>
  <li>Open the console and write: <strong>ng serve --open</strong> to run the project.</li>
 </ul>
</p>
<hr>
<h6>Routers:</h6>
<hr>
<ul>
<li>
url - /searchPhone?Search=:Search<br>
Method - GET<br>
Parameters - Search
</li>
<li>
url - /PersonPhone <br>
Method - GET<br>
</li>
<li>
url - /PersonPhone?BusinessEntityID=:BusinessEntityID<br>
Method - GET<br>
Parameters - BusinessEntityID
</li>
<li>
 url - /addPersonPhone<br>
 Method - POST<br>
 Parameters - PhoneNumber, PhoneNumberTypeID
</li>
<li>
 url - /editPersonPhone<br>
 Method - POST<br>
 Parameters - PhoneNumber, BusinessEntityID
</li>
<li>
 url - /deletePersonPhone<br>
 Method - POST<br>
 Parameters - BusinessEntityID, PhoneNumberTypeID
</li>
</ul>
<hr>
<ul>
<li> 
url - /PhoneNumberType <br>
Method - GET<br>
</li>
<li>
url - /PhoneNumberType?PhoneNumberType=:PhoneNumberTypeID<br>
Method - GET<br>
Parameters - PhoneNumberTypeID
</li>
<li>
 url - /addPhoneNumberType<br>
 Method - POST<br>
 Parameters - Name
</li>
<li>
 url - /editPhoneNumberType<br>
 Method - POST<br>
 Parameters - Name, PhoneNumberTypeID
</li>
<li>
 url - /deletePhoneNumberType<br>
 Method - POST<br>
 Parameters - PhoneNumberTypeID
</li>
</ul>
