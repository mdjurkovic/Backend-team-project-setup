import {countryFields, countryMutations, countryQueries} from "./country";
import {destinationFields, destinationMutations, destinationQueries,} from "./destination";
import {destinationTypeFields, destinationTypeMutations, destinationTypeQueries,} from "./destinationType";
import {excursionFields, excursionMutations, excursionQueries,} from "./excursion";
import {guiderFields, guiderMutations, guiderQueries} from "./guider";
import {tourFields, tourMutations, tourQueries} from "./tour";
import {departureFields, departureMutations, departureQueries} from "./departure";

const resolvers = {
    Query: {
        ...countryQueries,
        ...destinationQueries,
        ...destinationTypeQueries,
        ...excursionQueries,
        ...guiderQueries,
        ...tourQueries,
        ...departureQueries
    },
    Mutation: {
        ...countryMutations,
        ...destinationMutations,
        ...destinationTypeMutations,
        ...excursionMutations,
        ...guiderMutations,
        ...tourMutations,
        ...departureMutations
    },
    ...countryFields,
    ...destinationFields,
    ...destinationTypeFields,
    ...excursionFields,
    ...guiderFields,
    ...tourFields,
    ...departureFields
};

export default resolvers;
