// 验证工具

/**
 * 验证电话号码
 */
export function validatePhone(phone) {
  const phoneRegex = /^[0-9\-\+\s\(\)]+$/;
  return phoneRegex.test(phone) && phone.length >= 7;
}

/**
 * 验证验证码
 */
export function validateCode(code) {
  return /^\d{4,6}$/.test(code);
}

/**
 * 验证邮箱
 */
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 验证车架编号
 */
export function validateFrameNumber(number) {
  return number && number.length >= 5;
}

/**
 * 验证单车品牌
 */
export function validateBrand(brand) {
  return brand && brand.length >= 2;
}

/**
 * 验证位置描述
 */
export function validateLocation(location) {
  return location && location.length >= 5;
}

/**
 * 验证必填字段
 */
export function validateRequired(value) {
  return value && String(value).trim().length > 0;
}

/**
 * 获取验证错误消息
 */
export function getValidationMessage(field, value) {
  const messages = {
    phone: '请输入有效的电话号码',
    code: '请输入4-6位验证码',
    email: '请输入有效的邮箱地址',
    frameNumber: '车架编号至少5个字符',
    brand: '单车品牌至少2个字符',
    location: '位置描述至少5个字符',
    required: '此字段为必填项'
  };

  return messages[field] || '输入有效';
}