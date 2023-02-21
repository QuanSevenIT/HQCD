function main(){
    const eleTongTien = document.querySelector('.tongTien-js');
    const elePhiDichVu = document.querySelector('.phiDichVu-js');
    const eleSoNguoiChiaSe = document.querySelector('.soNguoiChiaSe-js');
    const eleTinhTien_btn = document.querySelector('.TinhTien-js');
    const eleTraTien = document.querySelector('.main-intoMoney-input');
    
    eleTinhTien_btn.addEventListener('click',()=>{
        const fromValue = {
            tongTien: eleTongTien.value,
            phiDichVu: elePhiDichVu.value,
            chiaSe: eleSoNguoiChiaSe.value
        }
        if(fromValue.phiDichVu=='a') {
            fromValue.phiDichVu=5/100;
        }
        else if(fromValue.phiDichVu=='b') {
            fromValue.phiDichVu=10/100;
        }
        else if(fromValue.phiDichVu=='c') {
            fromValue.phiDichVu=15/100;
        }
        else if(fromValue.phiDichVu=='d') {
            fromValue.phiDichVu=20/100;
        }
        else if(fromValue.phiDichVu=='e') {
            fromValue.phiDichVu=30/100;
        }
        else {
            fromValue.phiDichVu=50/100;
        }
    
        if(!fromValue.tongTien){
            eleTraTien.textContent = "Chưa nhập phần Tổng Tiền"
        }
        else if(fromValue.tongTien<=0){
            eleTraTien.textContent = "Tổng tiền phải lớn hơn 0"
        }
        else if(!fromValue.chiaSe){
            eleTraTien.textContent = "Chưa nhập phần số người chia sẻ"
        }
        else if(fromValue.chiaSe<=0){
            eleTraTien.textContent = "Số người chia sẻ phải lớn hơn 0"
        }
        else{
            const tienDichVu = fromValue.tongTien * fromValue.phiDichVu;
            const tongTienDichVu = Number(fromValue.tongTien) + tienDichVu
            const sum = ( tongTienDichVu / fromValue.chiaSe);
            eleTraTien.textContent = "Số tiền mỗi người phải trả là ${sum}"
        }
    })
    }
    main()