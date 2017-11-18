# ArticleControllerApi

All URIs are relative to *https://ultrahack.hs.fi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getArticleUsingGET**](ArticleControllerApi.md#getArticleUsingGET) | **GET** /articles/{id} | Return article


<a name="getArticleUsingGET"></a>
# **getArticleUsingGET**
> MALArticleContainer getArticleUsingGET(id)

Return article

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ArticleControllerApi;

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
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id |

### Return type

[**MALArticleContainer**](MALArticleContainer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

