import * as React from 'react';

export default class Auth extends React.Component {
    render() {

        fetch("http://localhost:8000/api/auth/check",
            {
                method: "post",
                mode: "cors",
                headers: {
                    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU2MzExNDU0NSwiZXhwIjoxNTYzMTE4MTQ1LCJuYmYiOjE1NjMxMTQ1NDUsImp0aSI6ImpOVjVaSjlNUzl6SUNEaDQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.SiordZ_t8JCfaiptnDkBAtq8ONpKN0uBmHfzm5ESYeM"
                }

            }).then(data => console.log(data));


        return (
            <div className="">
                {this.props.children}
            </div>

        );
    }
}

