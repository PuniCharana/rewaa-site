import { version, name } from '../../../package.json';

export class AppConstants {
  static readonly APP_NAME = name;
  static readonly APP_VERSION = version;
  static readonly API_URL = 'http://localhost:3000/v1';
  static readonly AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
}