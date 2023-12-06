const cutText = (text, number) => {
    if(text.length > number){
        return text.slice(0, number) + '...';
    }
  return text.slice(0, number);
}

const changeVND = new Intl.NumberFormat('vi-VN', {style: 'currency', currency:'VND'});
export { cutText, changeVND };
