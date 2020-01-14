export default interface LoginTypes {
    password: string | null,
    username: string | null,
    loginText: string,
    loginBarColor: string,
    emptyUsername?: boolean | undefined,
    emptyPassword?: boolean | undefined
}