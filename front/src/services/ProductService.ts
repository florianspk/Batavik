import AxiosFactory from './AxiosFactory';
import ports from '../helpers/portList';
import baseUrl from '../helpers/baseUrl';

export default AxiosFactory(`${baseUrl}:${ports.PRODUCT_SERVICE}/api`);
