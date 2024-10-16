import './style.css';
import Suggestion from "./Suggestion";
import Services from './Services';
import { CiStar } from 'react-icons/ci';
export default function MerchantServices() {
    return <>
        <div className="flex flex-col gap-4 text-[#004956]"></div>
        <h2 className="text-2xl fw-bold">كل الخدمات التي يحتاجها متجرك  </h2>
        <Services />
        <h2 className="text-2xl fw-bold">خدمات مقترحة لك</h2>
        <Suggestion />
        <h2 className="text-2xl fw-bold">خدمات مقترحة لك</h2>
        <Suggestion />
        <h2 className="text-2xl fw-bold">خدمات مقترحة لك</h2>
        <Suggestion />
        <services className='bg-gray-200 p-3 w-full flex flex-row justify-between items-center rounded-md border'>
            <h3 className='fw-bold '>اطلب خدماتك بثقة</h3>
            <p className='my-3'>تساعدك خدمات التاجر في إنجاز مختلف المشاريع والمهام بأيدي مزوِّدي خدمات معتمدين من سلة.</p>
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-row items-center gap-2">
                    <CiStar className='text-black bg-green-300 p-3 rounded-md border' />
                    <div className="flex flex-col   ">
                        <h5>موثوقية في التعامل</h5>
                        <p>كافة مزوِّدي الخدمات موثّقون، ويكون التعامل بإشراف سلة لضمان التزام الطرفين.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <CiStar className='text-black bg-green-300 p-3 rounded-md border' />
                    <div className="flex flex-col   ">
                        <h5>موثوقية في التعامل</h5>
                        <p>كافة مزوِّدي الخدمات موثّقون، ويكون التعامل بإشراف سلة لضمان التزام الطرفين.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <CiStar className='text-black bg-green-300 p-3 rounded-md border' />
                    <div className="flex flex-col   ">
                        <h5>موثوقية في التعامل</h5>
                        <p>كافة مزوِّدي الخدمات موثّقون، ويكون التعامل بإشراف سلة لضمان التزام الطرفين.</p>
                    </div>
                </div>
            </div>
            <iframe src={''} frameborder="0"></iframe>
        </services>
    </>
}
