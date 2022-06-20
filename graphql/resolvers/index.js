import { authorQueries, authorMutations, authorFields } from "./author";
import { bookQueries, bookMutations, bookFields } from "./book";
import {
  publisherQueries,
  publisherMutations,
  publisherFields,
} from "./publisher";
import { countryQueries, countryMutations, countryFields } from "./country";
import {
  destinationQueries,
  destinationMutations,
  destinationFields,
} from "./destination";
import {
  destinationTypeQueries,
  destinationTypeMutations,
  destinationTypeFields,
} from "./destinationType";
import {
  excursionQueries,
  excursionMutations,
  excursionFields,
} from "./excursion";
import { guiderQueries, guiderMutations, guiderFields } from "./guider";
import { tourQueries, tourMutations, tourFields } from "./tour";

const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
    ...publisherQueries,
    ...countryQueries,
    ...destinationQueries,
    ...destinationTypeQueries,
    ...excursionQueries,
    ...guiderQueries,
    ...tourQueries,
  },
  Mutation: {
    ...authorMutations,
    ...bookMutations,
    ...publisherMutations,
    ...countryMutations,
    ...destinationMutations,
    ...destinationTypeMutations,
    ...excursionMutations,
    ...guiderMutations,
    ...tourMutations,
  },
  ...authorFields,
  ...bookFields,
  ...publisherFields,
  ...countryFields,
  ...destinationFields,
  ...destinationTypeFields,
  ...excursionFields,
  ...guiderFields,
  ...tourFields,
};

export default resolvers;
