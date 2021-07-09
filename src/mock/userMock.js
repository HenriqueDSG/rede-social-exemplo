import mock from "../utils/mock"

mock.onPost("/api/home/login")
    .reply((config) =>
    {
        const { email, password } = JSON.parse(config.data);

        if (email !== '') {
            
        }

        return [200, {}]
    });