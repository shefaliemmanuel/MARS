// User form actions (local changes)
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

// Upload actions
export const ADD_UPLOADS = 'ADD_UPLOADS'

// Async fetch usercode called by thunk fetchUsercode(username, password)
export const FETCH_USERCODE_REQUEST = 'FETCH_USERCODE_REQUEST'
export const FETCH_USERCODE_SUCCESS = 'FETCH_USERCODE_SUCCESS'
export const FETCH_USERCODE_FAILURE = 'FETCH_USERCODE_FAILURE'

// Async fetch user's uploads called by thunk fetchUserSamples(username, password, data, page)
export const FETCH_USER_SAMPLES_REQUEST = 'FETCH_USER_SAMPLES_REQUEST'
export const FETCH_USER_SAMPLES_SUCCESS = 'FETCH_USER_SAMPLES_SUCCESS'
export const FETCH_USER_SAMPLES_FAILURE = 'FETCH_USER_SAMPLES_FAILURE'

// Async fetch sample by IGSN called by thunk fetchSample(username, password, data)
export const FETCH_SAMPLE_REQUEST = 'FETCH_SAMPLE_REQUEST'
export const FETCH_SAMPLE_SUCCESS = 'FETCH_SAMPLE_SUCCESS'
export const FETCH_SAMPLE_FAILURE = 'FETCH_SAMPLE_FAILURE'

// Async sample posting actions called by thunk postSamples(username, password, data)
export const POST_SAMPLES_REQUEST = 'POST_SAMPLES_REQUEST'
export const POST_SAMPLES_SUCCESS = 'POST_SAMPLES_SUCCESS'
export const POST_SAMPLES_FAILURE = 'POST_SAMPLES_FAILURE'

// Initialize upload samples
export const UPLOADS_ACTION_PREFIX = 'uploads/'
export const INIT_SAMPLE_USERCODE = 'INIT_SAMPLE_USERCODE'
export const INIT_SAMPLE_SAMPLE_TYPE = 'INIT_SAMPLE_SAMPLE_TYPE'
export const INIT_SAMPLE_NAME = 'INIT_SAMPLE_NAME'
export const INIT_SAMPLE_MATERIAL = 'INIT_SAMPLE_MATERIAL'
export const INIT_SAMPLE_IGSN = 'INIT_SAMPLE_IGSN'
export const INIT_SAMPLE_PARENT_IGSN = 'INIT_SAMPLE_PARENT_IGSN'
export const INIT_SAMPLE_IS_PRIVATE = 'INIT_SAMPLE_IS_PRIVATE'
export const INIT_SAMPLE_PUBLISH_DATE = 'INIT_SAMPLE_PUBLISH_DATE'
export const INIT_SAMPLE_CLASSIFICATION = 'INIT_SAMPLE_CLASSIFICATION'
export const INIT_SAMPLE_CLASSIFICATION_COMMENT = 'INIT_SAMPLE_CLASSIFICATION_COMMENT'
export const INIT_SAMPLE_FIELD_NAME = 'INIT_SAMPLE_FIELD_NAME'
export const INIT_SAMPLE_DESCRIPTION = 'INIT_SAMPLE_DESCRIPTION'
export const INIT_SAMPLE_AGE_MIN = 'INIT_SAMPLE_AGE_MIN'
export const INIT_SAMPLE_AGE_MAX = 'INIT_SAMPLE_AGE_MAX'
export const INIT_SAMPLE_AGE_UNIT = 'INIT_SAMPLE_AGE_UNIT'
export const INIT_SAMPLE_GEOLOGICAL_AGE = 'INIT_SAMPLE_GEOLOGICAL_AGE'
export const INIT_SAMPLE_GEOLOGICAL_UNIT = 'INIT_SAMPLE_GEOLOGICAL_UNIT'
export const INIT_SAMPLE_COLLECTION_METHOD = 'INIT_SAMPLE_COLLECTION_METHOD'
export const INIT_SAMPLE_COLLECTION_METHOD_DESCR = 'INIT_SAMPLE_COLLECTION_METHOD_DESCR'
export const INIT_SAMPLE_SIZE = 'INIT_SAMPLE_SIZE'
export const INIT_SAMPLE_SIZE_UNIT = 'INIT_SAMPLE_SIZE_UNIT'
export const INIT_SAMPLE_SAMPLE_COMMENT = 'INIT_SAMPLE_SAMPLE_COMMENT'
export const INIT_SAMPLE_PURPOSE = 'INIT_SAMPLE_PURPOSE'
export const INIT_SAMPLE_LATITUDE = 'INIT_SAMPLE_LATITUDE'
export const INIT_SAMPLE_LONGITUDE = 'INIT_SAMPLE_LONGITUDE'
export const INIT_SAMPLE_LATITUDE_END = 'INIT_SAMPLE_LATITUDE_END'
export const INIT_SAMPLE_LONGITUDE_END = 'INIT_SAMPLE_LONGITUDE_END'
export const INIT_SAMPLE_ELEVATION = 'INIT_SAMPLE_ELEVATION'
export const INIT_SAMPLE_ELEVATION_END = 'INIT_SAMPLE_ELEVATION_END'
export const INIT_SAMPLE_VERTICAL_DATUM = 'INIT_SAMPLE_VERTICAL_DATUM'
export const INIT_SAMPLE_NORTHING = 'INIT_SAMPLE_NORTHING'
export const INIT_SAMPLE_EASTING = 'INIT_SAMPLE_EASTING'
export const INIT_SAMPLE_ZONE = 'INIT_SAMPLE_ZONE'
export const INIT_SAMPLE_NAVIGATION_TYPE = 'INIT_SAMPLE_NAVIGATION_TYPE'
export const INIT_SAMPLE_PRIMARY_LOCATION_TYPE = 'INIT_SAMPLE_PRIMARY_LOCATION_TYPE'
export const INIT_SAMPLE_PRIMARY_LOCATION_NAME = 'INIT_SAMPLE_PRIMARY_LOCATION_NAME'
export const INIT_SAMPLE_LOCATION_DESCRIPTION = 'INIT_SAMPLE_LOCATION_DESCRIPTION'
export const INIT_SAMPLE_LOCALITY = 'INIT_SAMPLE_LOCALITY'
export const INIT_SAMPLE_LOCALITY_DESCRIPTION = 'INIT_SAMPLE_LOCALITY_DESCRIPTION'
export const INIT_SAMPLE_COUNTRY = 'INIT_SAMPLE_COUNTRY'
export const INIT_SAMPLE_PROVINCE = 'INIT_SAMPLE_PROVINCE'
export const INIT_SAMPLE_COUNTY = 'INIT_SAMPLE_COUNTY'
export const INIT_SAMPLE_CITY = 'INIT_SAMPLE_CITY'
export const INIT_SAMPLE_CRUISE_FIELD_PRGRM = 'INIT_SAMPLE_CRUISE_FIELD_PRGRM'
export const INIT_SAMPLE_PLATFORM_TYPE = 'INIT_SAMPLE_PLATFORM_TYPE'
export const INIT_SAMPLE_PLATFORM_NAME = 'INIT_SAMPLE_PLATFORM_NAME'
export const INIT_SAMPLE_PLATFORM_DESCR = 'INIT_SAMPLE_PLATFORM_DESCR'
export const INIT_SAMPLE_LAUNCH_PLATFORM_NAME = 'INIT_SAMPLE_LAUNCH_PLATFORM_NAME'
export const INIT_SAMPLE_LAUNCH_ID = 'INIT_SAMPLE_LAUNCH_ID'
export const INIT_SAMPLE_LAUNCH_TYPE_NAME = 'INIT_SAMPLE_LAUNCH_TYPE_NAME'
export const INIT_SAMPLE_COLLECTOR = 'INIT_SAMPLE_COLLECTOR'
export const INIT_SAMPLE_COLLECTOR_DETAIL = 'INIT_SAMPLE_COLLECTOR_DETAIL'
export const INIT_SAMPLE_COLLECTION_START_DATE = 'INIT_SAMPLE_COLLECTION_START_DATE'
export const INIT_SAMPLE_COLLECTION_END_DATE = 'INIT_SAMPLE_COLLECTION_END_DATE'
export const INIT_SAMPLE_COLLECTION_DATE_PRECISION = 'INIT_SAMPLE_COLLECTION_DATE_PRECISION'
export const INIT_SAMPLE_CURRENT_ARCHIVE = 'INIT_SAMPLE_CURRENT_ARCHIVE'
export const INIT_SAMPLE_CURRENT_ARCHIVE_CONTACT = 'INIT_SAMPLE_CURRENT_ARCHIVE_CONTACT'
export const INIT_SAMPLE_ORIGINAL_ARCHIVE = 'INIT_SAMPLE_ORIGINAL_ARCHIVE'
export const INIT_SAMPLE_DEPTH_MIN = 'INIT_SAMPLE_DEPTH_MIN'
export const INIT_SAMPLE_DEPTH_MAX = 'INIT_SAMPLE_DEPTH_MAX'
export const INIT_SAMPLE_DEPTH_SCALE = 'INIT_SAMPLE_DEPTH_SCALE'
export const INIT_SAMPLE_OTHER_NAMES = 'INIT_SAMPLE_OTHER_NAMES'
