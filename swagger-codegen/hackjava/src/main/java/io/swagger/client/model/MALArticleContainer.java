/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.MALArticle;
import java.io.IOException;

/**
 * MALArticleContainer
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2017-11-17T19:20:51.858+02:00")
public class MALArticleContainer {
  @SerializedName("articles")
  private MALArticle articles = null;

  public MALArticleContainer articles(MALArticle articles) {
    this.articles = articles;
    return this;
  }

   /**
   * Get articles
   * @return articles
  **/
  @ApiModelProperty(required = true, value = "")
  public MALArticle getArticles() {
    return articles;
  }

  public void setArticles(MALArticle articles) {
    this.articles = articles;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MALArticleContainer maLArticleContainer = (MALArticleContainer) o;
    return Objects.equals(this.articles, maLArticleContainer.articles);
  }

  @Override
  public int hashCode() {
    return Objects.hash(articles);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MALArticleContainer {\n");
    
    sb.append("    articles: ").append(toIndentedString(articles)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
  
}
