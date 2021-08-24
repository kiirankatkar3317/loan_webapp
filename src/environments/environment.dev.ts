export const environment = {
    production: false,
    BASE_URL:'http://localhost:3000',
    CUSTOMER_BASE_URL:'http://localhost:3000/customers/',
    CUSTOMER:{
        GET_ALL_CUSTOMERS :'list',
        GET_CUSTOMER_DETAIL :'view',
        UPDATE_CUSTOMER : 'edit',
        DELETE_CUSTOMER : 'delete',
        SEARCH_CUSTOMER : 'search',
        ADD_CUSTOMER : 'add'
    },
    LOAN_BASE_URL:'http://localhost:3000/loans/',
    LOANS:{
        GET_ALL_LOANS :'list',
        GET_LOAN_DETAIL : 'view',
        UPDATE_LOAN : 'add',
        DELETE_LOAN : 'delete',
        SEARCH_LOAN : 'search',
    
    
    }
  };
  