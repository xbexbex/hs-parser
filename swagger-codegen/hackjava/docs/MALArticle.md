
# MALArticle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**articleType** | **String** |  | 
**blockType** | [**BlockTypeEnum**](#BlockTypeEnum) |  | 
**bodyText** | **String** |  | 
**category** | **String** |  | 
**cellType** | **String** |  | 
**date** | **Long** |  | 
**departmentId** | **Long** |  |  [optional]
**departmentTitle** | **String** |  | 
**editorName** | **String** |  | 
**editors** | [**List&lt;MALEditor&gt;**](MALEditor.md) |  |  [optional]
**elementPicture** | [**MALPicture**](MALPicture.md) |  | 
**elementVignette** | **String** |  | 
**embeddedContent** | [**List&lt;MALEmbedded&gt;**](MALEmbedded.md) |  |  [optional]
**externalUrl** | **String** |  | 
**hardPaywall** | **Boolean** |  |  [optional]
**id** | **String** |  | 
**largeRelated** | [**List&lt;MALArticle&gt;**](MALArticle.md) |  |  [optional]
**layoutModel** | [**LayoutModelEnum**](#LayoutModelEnum) |  | 
**lead** | **String** |  | 
**mainGraphicType** | **String** |  | 
**mainHeader** | **String** |  | 
**mainPicture** | [**MALPicture**](MALPicture.md) |  | 
**mainTag** | [**MALTag**](MALTag.md) |  | 
**mobilePicture** | [**MALPicture**](MALPicture.md) |  | 
**mobilePictureType** | [**MobilePictureTypeEnum**](#MobilePictureTypeEnum) |  | 
**modified** | **Boolean** |  |  [optional]
**pictures** | [**List&lt;MALPicture&gt;**](MALPicture.md) |  |  [optional]
**premiumArchived** | **Boolean** |  |  [optional]
**secondaryTags** | [**List&lt;MALTag&gt;**](MALTag.md) |  |  [optional]
**shareToken** | **String** |  | 
**shareUrl** | **String** |  | 
**smallRelated** | [**List&lt;MALArticle&gt;**](MALArticle.md) |  |  [optional]
**startDate** | **Long** |  | 
**style** | **String** |  | 
**subHeader** | **String** |  | 
**url** | **String** |  | 
**videos** | [**List&lt;MALVideo&gt;**](MALVideo.md) |  |  [optional]


<a name="BlockTypeEnum"></a>
## Enum: BlockTypeEnum
Name | Value
---- | -----
BLOCKGROUP | &quot;BLOCKGROUP&quot;
AD | &quot;AD&quot;
AD_TABLET | &quot;AD_TABLET&quot;
TAG | &quot;TAG&quot;
MULTITAG | &quot;MULTITAG&quot;
ARTICLE | &quot;ARTICLE&quot;
VIDEO | &quot;VIDEO&quot;


<a name="LayoutModelEnum"></a>
## Enum: LayoutModelEnum
Name | Value
---- | -----
TOTALHTML | &quot;TOTALHTML&quot;
L | &quot;L&quot;
XL | &quot;XL&quot;
M | &quot;M&quot;
COLUMN | &quot;COLUMN&quot;
XL_TEXT | &quot;XL_TEXT&quot;
XL_SEMIFULL | &quot;XL_SEMIFULL&quot;
ADVERT | &quot;ADVERT&quot;


<a name="MobilePictureTypeEnum"></a>
## Enum: MobilePictureTypeEnum
Name | Value
---- | -----
PICTURE | &quot;PICTURE&quot;
VIDEOTHUMBNAIL | &quot;VIDEOTHUMBNAIL&quot;



