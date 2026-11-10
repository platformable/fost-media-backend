import type { Schema, Struct } from '@strapi/strapi';

export interface AdCategoryAd extends Struct.ComponentSchema {
  collectionName: 'components_ad_category_ads';
  info: {
    displayName: 'categoryAd';
    icon: 'apps';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    LinkURL: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ad.category-ad': AdCategoryAd;
    }
  }
}
