import type { Schema, Struct } from '@strapi/strapi';

export interface SharedOrganizators extends Struct.ComponentSchema {
  collectionName: 'components_shared_organizators';
  info: {
    displayName: 'Organizators';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface SharedQuarterData extends Struct.ComponentSchema {
  collectionName: 'components_shared_quarter_data';
  info: {
    description: '';
    displayName: 'quarter-data';
  };
  attributes: {
    q1: Schema.Attribute.Enumeration<['diamond', 'gold', 'null']>;
    q2: Schema.Attribute.Enumeration<['diamond', 'gold', 'null']>;
    q3: Schema.Attribute.Enumeration<['diamond', 'gold', 'null']>;
    q4: Schema.Attribute.Enumeration<['diamond', 'gold', 'null']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.organizators': SharedOrganizators;
      'shared.quarter-data': SharedQuarterData;
    }
  }
}
