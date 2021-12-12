export const { REACT_APP_WEB3_URL, REACT_APP_BEACONCHA_PRATER_URL, caca } = process.env;
export function loadEnvs(): void {
  !REACT_APP_WEB3_URL && console.error("REACT_APP_WEB3_URL is not set");
  !REACT_APP_BEACONCHA_PRATER_URL && console.error("REACT_APP_BEACONCHA_PRATER_URL is not set");
}
