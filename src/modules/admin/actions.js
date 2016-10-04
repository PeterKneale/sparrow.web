import { hashHistory } from 'react-router'

export function navigate(url){
    hashHistory.push(url)
}
