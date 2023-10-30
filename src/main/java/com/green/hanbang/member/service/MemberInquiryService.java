package com.green.hanbang.member.service;

import com.green.hanbang.member.vo.MemberInquiryImgVO;
import com.green.hanbang.member.vo.MemberInquiryTypeVO;
import com.green.hanbang.member.vo.MemberInquiryVO;

import java.util.List;

public interface MemberInquiryService {

    // 문의 유형 조회
    public List<MemberInquiryTypeVO> selectMemberInquiryTypeList(MemberInquiryTypeVO memberInquiryTypeVO);

    // 문의 작성물 전송
    public int insertMemberInquiry(MemberInquiryVO memberInquiryVO); // 제목, 내용 등
    public int insertMemberInquiryImg(MemberInquiryImgVO memberInquiryImgVO); // 첨부 파일
    public int insertMemberInquiryType(MemberInquiryTypeVO memberInquiryTypeVO); // 문의 유형
}
