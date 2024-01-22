import {gql} from '@apollo/client';

export const GET_PROPERTIES = args => {
  const argStrings = [];

  if (args?.name) {
    argStrings.push(`name: "${args.name}"`);
  }
  if (args?.description) {
    argStrings.push(`description: "${args.description}"`);
  }
  if (args?.propertyType) {
    argStrings.push(`propertyType: "${args.propertyType}"`);
  }
  if (args?.priceLessThan) {
    argStrings.push(`priceLessThan: ${args.priceLessThan}`);
  }
  if (args?.priceGreaterThan) {
    argStrings.push(`priceGreaterThan: ${args.priceGreaterThan}`);
  }

  const argsString = argStrings.join('\n');
  return gql`
    query {
      getProperties ${argsString ? `(\n${argsString}\n)` : ''} {
        id
        name
        description
        area
        facilities
        propertyType
        mainImage
        images
        price
        owner {
          id
          contactNumber
          profileImage
          name
          city
        }
      }
    }
  `;
};
