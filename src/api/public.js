
import request from "@/utils/request";

/**
 * 首页
 * @returns {*}
 */
export function getHomeData() {
  return request.get("index", {}, { login: false });
}


/**
 * 分享
 * @returns {*}
 */
export function getShare() {
  return request.get("/share", {}, { login: false });
}


/**
 * 获取微信sdk配置
 * @returns {*}
 */
export function getWechatConfig() {
  return request.get(
    "/wechat/config",
    { url: document.location.href },
    { login: false }
  );
}

/**
 * 获取微信sdk配置
 * @returns {*}
 */
export function wechatAuth(code, spread, login_type) {
  return request.get(
    "/wechat/auth",
    { code, spread, login_type },
    { login: false }
  );
}
/**
 * 获取快递公司
 * @returns {*}
 */
export function getLogistics() {
  return request.get("/logistics", {}, { login: false });
}

/**
 * 获取登陆logo
 * @returns {*}
 */
export function getLogo(type) {
  return request.get("/wechat/get_logo", { type: type }, { login: false });
}

/**
 * 获取图片base64
 * @retins {*}
 * */
export function imageBase64(image, code) {
  return request.post(
    "/image_base64",
    { image: image, code: code },
    { login: false }
  );
}

/**
 * 订单统计数据
 * @returns {*}
 */
export function getOrderData() {
  return request.get("/order/data");
}

/**
 * 订单列表
 * @returns {*}
 */
export function getOrderList(data) {
  return request.get("/order/list", data);
}
