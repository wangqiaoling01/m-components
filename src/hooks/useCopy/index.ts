import { ElMessage } from 'element-plus';
/**
 * 复制文本:
 * 1. 创建输入框
 * 2. 赋值
 * 3. 追加到 body 中去
 * 4. 选择输入框
 * 5. 执行复制操作
 * 6. 删除输入框
 * 7. 提示复制成功
 * @param text 文本
 */
export const useCopy = (text: string) => {
  let input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  ElMessage.success('复制成功');
};
