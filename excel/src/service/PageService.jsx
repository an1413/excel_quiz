import axios from 'axios';

const FUNCDIC_API_BASE_URL = "http://localhost:8080/api/function_dic";
const BEGINNER_API_BASE_URL = "http://localhost:8080/api/question/BEGINNER";
const JUNIOR_API_BASE_URL = "http://localhost:8080/api/question/JUNIOR";

class PageService {
    getFuncDic() {
        return axios.get(FUNCDIC_API_BASE_URL);
    }

    getBeginner() {
        return axios.get(BEGINNER_API_BASE_URL);
    }

    getJunior() {
        return axios.get(JUNIOR_API_BASE_URL);
    }

}

export default new PageService();