export type ResMeT = {
  userId: string
  login: string
}

export type RequestLoginT = {
  code: string
  redirectUri: string
  accessTokenTTL: string
  rememberMe: boolean
}

export type ResponseLoginT = {
  accessToken: string
  refreshToken: string
}
