package com.green.hanbang.item.vo;

import lombok.Data;

@Data
public class PackageItemVO {
    private String packageCode;
    private String buyCode;
    private String itemCode;
    private String userNo;
    private String startDate;
    private String endDate;
    private int generalProductCnt;
    private int plusSeasonCnt;
    private int plusDayCnt;
    private String isValid;
    private String memCateCode;
    private String memCateName;
}
