let helloWorld = 'Hello World';



interface User {
    name: string,
    id: number
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}


const user: User = new UserAccount('Murphy', 1)

type MyBool = true | false

type WindowStates = 'open' | 'closed' | 'minimized'

type StringArray = Array<string>

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

declare const backpack: Backpack<String>
const object = backpack.get()

backpack.add('333')

fetch("https://wing.coupang.com/sc-ui/auth/email", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://wing.coupang.com/login?returnUrl=http%3A%2F%2Fwing.coupang.com%2F",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"vendorId\":\"C00467144\",\"userId\":\"yuhuajian92929\",\"locale\":\"en\",\"authPurpose\":\"LOGIN\",\"authToken\":\"e55c5e4d-b90d-4215-b323-b0988c4af302\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

{"code":"200","message":"OK","data":{"success":true,"reasonCode":"SUCCESS","reason":"Authentication code was sent."},"success":true}


fetch("https://wing.coupang.com/sc-ui/auth/email/verify", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://wing.coupang.com/login?returnUrl=http%3A%2F%2Fwing.coupang.com%2F",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"vendorId\":\"C00467144\",\"userId\":\"yuhuajian92929\",\"locale\":\"en\",\"authNumber\":\"6577\",\"authPurpose\":\"LOGIN\",\"authToken\":\"e55c5e4d-b90d-4215-b323-b0988c4af302\",\"requestId\":\"C00467144yuhuajian929291980333785644931166\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});


fetch("https://wing.coupang.com/login", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
    "sec-ch-ua-mobile": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://wing.coupang.com/login?returnUrl=http%3A%2F%2Fwing.coupang.com%2F",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "username=VENDOR%2Cyuhuajian92929&password=yhj92929%2C",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});