export type Product = {
  Price: {
    Value: number
    Currency: string
  }
  SoldOut: number
  Title: string
  ProductCategory: {
    ProductCategoryId: number
    Name: string
  }
  PhotoUploadCount: number
  CardShopId: number
  DirectSmile: boolean
  DefaultSizeId: number
  ProductId: number
  MoonpigProductNo: string
  TradingFaces: number
  IsLandscape: number
  ShortDescription: string
  Description: string
  IsCustomisable: number
  IsMultipack: number
  SeoPath: string
  ProductCategoryGroupSeoPath: string
  ProductLink: {
    Href: string
    Method: string
    Rel: string
    Title: string
  }
  ProductImage: {
    Link: {
      Href: string
      Method: string
      Rel: string
      Title: string
    }
    MimeType: string
  }
  Reviews: {
    MinReviewData: number
    MaxReviewData: number
    AverageStarReviewRating: number
    ReviewCount: number
  }
  AdditionalProductImages: string[]
}
