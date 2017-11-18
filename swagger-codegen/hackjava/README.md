# swagger-java-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>swagger-java-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:swagger-java-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/swagger-java-client-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ArticleControllerApi;

import java.io.File;
import java.util.*;

public class ArticleControllerApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ArticleControllerApi apiInstance = new ArticleControllerApi();
        String id = "id_example"; // String | id
        try {
            MALArticleContainer result = apiInstance.getArticleUsingGET(id);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ArticleControllerApi#getArticleUsingGET");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://ultrahack.hs.fi*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ArticleControllerApi* | [**getArticleUsingGET**](docs/ArticleControllerApi.md#getArticleUsingGET) | **GET** /articles/{id} | Return article


## Documentation for Models

 - [MALArticle](docs/MALArticle.md)
 - [MALArticleContainer](docs/MALArticleContainer.md)
 - [MALEditor](docs/MALEditor.md)
 - [MALEmbedded](docs/MALEmbedded.md)
 - [MALPicture](docs/MALPicture.md)
 - [MALTag](docs/MALTag.md)
 - [MALVideo](docs/MALVideo.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### basicAuth

- **Type**: HTTP basic authentication


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



