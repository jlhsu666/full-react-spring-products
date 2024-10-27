# full-react-spring-products<br>

# Back: Spring Boot<br>
model->repository->service->controller->config<br>

# Setting Environment Variables on Windows<br>
cmd <br>
set SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/product<br>
set SPRING_DATASOURCE_USERNAME=user<br>
set SPRING_DATASOURCE_PASSWORD=password<br>

# Setting MySQL<br>
 CREATE DATABASE product;<br>
 GRANT ALL PRIVILEGES ON product.* TO 'user'@'localhost'; FLUSH PRIVILEGES;<br>


 # Front: React<br>
 npm create-react-app     // npm create vite front -- --template react<br>
 npm install bootstrap<br>


 App -> NavBar -> ProductList -> ProductTableRow -> ApiService ->  UpdateProductForm -> CreateProductForm -> ProductContext

