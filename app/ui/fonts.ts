
// 导入Google字体，{}中是Google的字体名
import {Inter, Lusitana} from 'next/font/google';
//导入字体的子集，避免全部加载，具体子集的名称，可在Google fonts的字体页面查看
//此处导入Inter字体的latin子集
export const inter = Inter({subsets:['latin']})
// lusitana子集的weight是必须参数
export const lusitana = Lusitana({
    subsets:['latin'],
    weight:['400','700'],
})