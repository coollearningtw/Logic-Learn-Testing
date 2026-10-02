/**
 * 樂知學｜第二代學習平台
 * 首頁 JavaScript
 *
 * 目前負責：
 * 1. 每日簽到
 * 2. 簽到天數顯示
 * 3. 公告按鈕
 *
 * 注意：
 * - 目前使用 localStorage 作為暫時的本機資料儲存。
 * - 尚未連接後端、資料庫或登入系統。
 * - 後續正式資料架構建立後，會再替換相關功能。
 */


/* =========================================================
   1. 常數
   ========================================================= */

const STORAGE_KEYS = {
    checkin: "coollearning_v2_checkin"
};


/* =========================================================
   2. DOM 元素
   ========================================================= */

const checkinButton = document.querySelector("#checkin-button");

const checkinTotalDays = document.querySelector(
    "#checkin-total-days"
);

const checkinMessage = document.querySelector(
    "#checkin-message"
);

const announcementButton = document.querySelector(
    "#announcement-button"
);


/* =========================================================
   3. 工具函式
   ========================================================= */

/**
 * 取得今天的日期。
 *
 * 使用本機時間，格式固定為：
 * YYYY-MM-DD
 *
 * @returns {string}
 */
function getTodayString() {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


/**
 * 讀取簽到資料。
 *
 * @returns {{
 *     totalDays: number,
 *     lastCheckinDate: string | null
 * }}
 */
function getCheckinData() {
    const defaultData = {
        totalDays: 0,
        lastCheckinDate: null
    };

    try {
        const savedData = localStorage.getItem(
            STORAGE_KEYS.checkin
        );

        if (!savedData) {
            return defaultData;
        }

        const parsedData = JSON.parse(savedData);

        if (
            typeof parsedData !== "object" ||
            parsedData === null
        ) {
            return defaultData;
        }

        const totalDays = Number(
            parsedData.totalDays
        );

        const lastCheckinDate =
            typeof parsedData.lastCheckinDate === "string"
                ? parsedData.lastCheckinDate
                : null;

        return {
            totalDays:
                Number.isFinite(totalDays) &&
                totalDays >= 0
                    ? Math.floor(totalDays)
                    : 0,

            lastCheckinDate
        };
    } catch {
        return defaultData;
    }
}


/**
 * 儲存簽到資料。
 *
 * @param {{
 *     totalDays: number,
 *     lastCheckinDate: string | null
 * }} data
 */
function saveCheckinData(data) {
    try {
        localStorage.setItem(
            STORAGE_KEYS.checkin,
            JSON.stringify(data)
        );
    } catch {
        /*
         * 如果瀏覽器禁止 localStorage，
         * 目前不讓錯誤中斷首頁其他功能。
         */
    }
}


/* =========================================================
   4. 更新簽到畫面
   ========================================================= */

/**
 * 根據目前資料更新首頁上的簽到資訊。
 */
function updateCheckinDisplay() {
    if (!checkinTotalDays) {
        return;
    }

    const data = getCheckinData();

    checkinTotalDays.textContent =
        String(data.totalDays);


    if (!checkinButton || !checkinMessage) {
        return;
    }

    const today = getTodayString();

    if (data.lastCheckinDate === today) {
        checkinButton.textContent = "今日已簽到";

        checkinButton.disabled = true;

        checkinMessage.textContent =
            "今天已完成簽到，明天再繼續學習。";

        checkinButton.setAttribute(
            "aria-label",
            "今日已簽到"
        );

        return;
    }

    checkinButton.textContent = "簽到";

    checkinButton.disabled = false;

    checkinMessage.textContent =
        "今天也一起學習吧。";

    checkinButton.setAttribute(
        "aria-label",
        "今日簽到"
    );
}


/* =========================================================
   5. 每日簽到
   ========================================================= */

/**
 * 執行簽到。
 */
function performCheckin() {
    const data = getCheckinData();

    const today = getTodayString();

    /*
     * 防止同一天重複簽到。
     */
    if (data.lastCheckinDate === today) {
        return;
    }

    data.totalDays += 1;

    data.lastCheckinDate = today;

    saveCheckinData(data);

    updateCheckinDisplay();
}


/**
 * 初始化簽到功能。
 */
function initializeCheckin() {
    if (!checkinButton) {
        return;
    }

    checkinButton.addEventListener(
        "click",
        performCheckin
    );

    updateCheckinDisplay();
}


/* =========================================================
   6. 公告
   ========================================================= */

/**
 * 顯示目前的公告訊息。
 *
 * 目前先使用簡單的瀏覽器提示。
 *
 * 未來正式公告系統建立後，
 * 這裡會改成網站內的公告視窗。
 */
function showAnnouncement() {
    window.alert(
        "目前沒有新的公告。"
    );
}


/**
 * 初始化公告按鈕。
 */
function initializeAnnouncement() {
    if (!announcementButton) {
        return;
    }

    announcementButton.addEventListener(
        "click",
        showAnnouncement
    );
}


/* =========================================================
   7. 首頁初始化
   ========================================================= */

function initializeApp() {
    initializeCheckin();

    initializeAnnouncement();
}


/* =========================================================
   8. 啟動
   ========================================================= */

if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        initializeApp,
        {
            once: true
        }
    );
} else {
    initializeApp();
}