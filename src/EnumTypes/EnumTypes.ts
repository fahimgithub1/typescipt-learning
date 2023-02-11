enum RType{
    sucess,
    Faillure,
    UnAuthenticated,
    ForBidden
}

interface APIResponse1<T> {
    status: number;
    type1: RType; // there is Rtyep
    data: T
}

const response11: APIResponse1<object> ={
    status: 200,
    type1: RType.sucess, // there is Rtyep
    data: {
        name: 'test',
        something: 500
    }
}




