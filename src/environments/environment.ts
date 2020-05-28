// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  redirect_uri: 'http://localhost:4200/home',
  did_siop_request: 'openid://?client_id=http%3A%2F%2Flocalhost%3A4200%2Fhome&request=eyJhbGciOiJFUzI1NkstUiIsInR5cCI6IkpXVCIsImtpZCI6ImRpZDpldGhyOjB4QjA3RWFkOTcxN2I0NEI2Y0Y0MzljNDc0MzYyYjlCMDg3N0NCQkY4MyNvd25lciJ9.eyJpc3MiOiJkaWQ6ZXRocjoweEIwN0VhZDk3MTdiNDRCNmNGNDM5YzQ3NDM2MmI5QjA4NzdDQkJGODMiLCJyZXNwb25zZV90eXBlIjoiaWRfdG9rZW4iLCJzY29wZSI6Im9wZW5pZCBkaWRfYXV0aG4iLCJjbGllbnRfaWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAvaG9tZSIsInJlZ2lzdHJhdGlvbiI6eyJqd2tzX3VyaSI6Imh0dHBzOi8vdW5pcmVzb2x2ZXIuaW8vMS4wL2lkZW50aWZpZXJzL2RpZDpleGFtcGxlOjB4YWI7dHJhbnNmb3JtLWtleXM9andrcyIsImlkX3Rva2VuX3NpZ25lZF9yZXNwb25zZV9hbGciOlsiRVMyNTZLLVIiLCJFZERTQSIsIlJTMjU2Il19fQ.TB8LLoZp5bZC1eaqIN3N7tVNaKnYSj6sPj7EdqXfLYmyWxBLtp7ubjhIJ07xaQK8i4leaFEwrzQJpG8RufSv4gA&response_type=id_token&scope=openid%20did_authn'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
