const cases = [
  {
    id:"consent", no:"01", title:"治療前：分離器械風險告知",
    card:"開始治療前，如何把風險、原因、處理方式與預後一次說完整。",
    summary:"適用於初次根管治療或再治療前。目標不是把病人嚇到，而是讓病人知道可能發生什麼、發生後有哪些選擇，以及何時可能需要轉診。",
    context:["尚未開始治療","需要完成知情同意","由醫師親自說明"],
    phases:[
      phase("建立說明脈絡","先告訴病人接下來要談的是治療風險，確認病人有時間聽並可以提問。",
        ["確認病人身分、治療牙位與預定治療","拿出同意書，由醫師親自說明分離器械段落","不要只請助理拿文件給病人簽"],
        [
          d("醫師","陳先生，開始治療前，我想先用幾分鐘跟你說明根管治療可能遇到的風險，以及如果真的發生，我們會怎麼處理。你有任何問題都可以直接問我。"),
          d("病人","根管治療會有什麼風險？")
        ],
        good("先建立『可以提問』的氣氛，病人比較不會把同意書理解成免責文件。"),
        warn("不要說：「這只是例行文件，簽一簽就好。」")),
      phase("說明什麼是分離器械","使用病人聽得懂的語言，說明器械可能分離並留在根管內。",
        ["說明是治療器械的一小段可能分離","說明根管彎曲、狹窄、鈣化等會增加難度","不要保證絕對不會發生，也不要把原因全部推給牙齒"],
        [
          d("醫師","治療時會使用很細小的器械清潔根管。少數情況下，器械可能因根管彎曲、狹窄、鈣化或操作過程中的受力而分離，有一小段留在牙齒裡。"),
          d("病人","這種情況常見嗎？"),
          d("醫師","不是每個人都會遇到，但這個風險無法完全降到零。我們會依牙齒條件、影像與治療中的回饋盡量降低風險。")
        ],
        good("若要提供發生率，應使用你有來源且符合當下個案與器械系統的資料，不要把單一數字當成保證。"),
        warn("避免：「這都是你的牙齒太彎造成，跟技術沒有關係。」")),
      phase("說明發生後的處理選項","讓病人知道處理目標是感染控制與保留牙齒，不是無條件取出。",
        ["評估器械位置、根管解剖與剩餘齒質","可能嘗試取出","可能繞過後清潔、消毒與封填","也可能追蹤或轉診專科評估"],
        [
          d("病人","如果真的斷在裡面，會怎麼辦？"),
          d("醫師","我們會先看器械的位置、根管形狀、感染狀況，以及取出會不會犧牲太多牙齒。之後可能嘗試取出、繞過它完成清潔，或轉診給牙髓病專科醫師評估。"),
          d("醫師","轉診的目的，是讓專科醫師判斷最合適的處理方式，不代表一定能取出，也不代表唯一目標就是取出。")
        ],
        good("清楚交代『取出、繞過／清潔、追蹤／轉診』，並強調依個案選擇。"),
        warn("避免：「一定拿得出來」或「留著一定沒關係」。")),
      phase("交代最好與最壞情況","讓病人理解可能順利完成，也可能因持續感染而需要手術或拔牙。",
        ["說明無症狀也需定期追蹤","若症狀持續，需重新評估再治療、手術或拔牙","交代轉診可能有額外費用"],
        [
          d("醫師","如果能完成良好的清潔與感染控制，牙齒可能沒有症狀並持續使用，但仍需要定期追蹤。"),
          d("醫師","如果感染無法控制、症狀持續，或牙齒本身有裂紋、剩餘齒質不足，後續可能需要手術，最壞也可能需要拔牙。"),
          d("病人","如果轉診，會有額外費用嗎？"),
          d("醫師","可能會有。實際費用與方案要由轉診院所評估，我會在轉診前把原因與資料準備清楚。")
        ],
        good("不要只講最好情況；病人需要知道不同路徑與決策點。"),
        warn("避免保證：「處理得當就完全不影響成功率。」")),
      phase("確認理解與完成紀錄","請病人用自己的話說明理解，回答問題後再完成簽署。",
        ["確認病人理解風險、替代方案與可能費用","記錄醫師已說明的內容與病人提問","病歷記錄病人選擇及後續計畫"],
        [
          d("醫師","我想確認一下，你目前理解的是：少數情況可能發生器械分離；若發生，會依位置與風險決定取出、繞過、追蹤或轉診。你最擔心的是哪一部分？"),
          d("病人","我擔心最後牙齒還是留不住。"),
          d("醫師","這個擔心很合理。我們會把保留牙齒當作目標，但不會在治療前保證結果。我會把今天討論的內容、你的問題與選擇完整記錄。")
        ],
        good("同意書是溝通紀錄，不是免責工具。"),
        warn("不要在病人未理解時催促簽名。"))
    ],
    checklist:["同意書由醫師親自說明","說明可能原因與不確定性","說明取出、繞過／清潔、追蹤／轉診","說明最好與最壞情況","說明轉診目的與可能費用","確認理解、提問與選擇","完成病歷紀錄"]
  },
  {
    id:"unknown", no:"02", title:"影像疑似：病人不知道",
    card:"X 光看到疑似高密度阻塞物，但病人沒有被告知過相關資訊。",
    summary:"單靠 X 光通常不能直接確認材料性質，也不能直接認定它就是疼痛原因。先客觀描述影像，再回到目前的症狀與完整診斷。",
    context:["舊根管治療牙疼痛","影像疑似高密度物","病人不知情"],
    phases:[
      phase("釐清主訴與病史","先問清楚疼痛型態、時間、誘發因子與過往治療，不要一看到影像就下結論。",
        ["確認疼痛時間、冷熱痛、咬合痛、腫脹與自發痛","詢問治療年份、是否曾被告知特殊狀況","確認修復體、蛀牙、牙周與裂牙風險"],
        [d("醫師","這顆牙從什麼時候開始不舒服？是咬東西痛、自己抽痛，還是冷熱會痛？"),d("病人","好幾天了，吃東西時特別痛。以前抽過神經。"),d("醫師","我會先把現在疼痛的來源找出來。舊根管治療牙再度疼痛，可能和新的感染、修復體邊緣、裂紋或根尖周圍狀況有關。")],
        good("先建立鑑別診斷，不把所有問題歸因於影像中的單一物件。"),
        warn("避免一開始就說：「以前沒做好。」")),
      phase("客觀描述影像","只說目前看得到的事實，清楚區分觀察與確定診斷。",
        ["指出舊根管填充材料","描述另有高密度影像或阻塞物","說明不同材料在 X 光上可能都呈現白亮影像"],
        [d("醫師","X 光顯示這顆牙以前做過根管治療，根管內有舊的填充材料。另外有一段高密度影像。"),d("病人","那是斷針嗎？"),d("醫師","只靠這張 X 光還不能百分之百確定。不同年代與種類的填充材料、金屬材料或器械，在 X 光上都可能呈現白亮影像。我會把它列入重要評估，但不會在未確認前直接定性。")],
        good("可用「高密度影像、阻塞物、未知材料」描述未確認發現，但不能藉此刻意隱瞞已確認事實。"),
        warn("不要直接承認或直接否認；也不要刻意用模糊字眼規避告知。")),
      phase("說明可能病因","把注意力拉回目前可處理的問題。",
        ["新的齲齒或冠邊緣滲漏","根管內再感染","牙根裂或咬合相關問題","過往治療後未完全癒合"],
        [d("病人","是不是就是那個東西讓我痛？"),d("醫師","它可能影響後續處理，但目前不能直接說它就是疼痛原因。疼痛也可能來自新的感染、牙裂、修復體邊緣滲漏，或根尖周圍沒有完全癒合。我們需要把這些一起檢查。")],
        good("明確說明『材料存在』與『造成疼痛』是兩個不同問題。"),
        warn("不要批評前醫師，也不要替前次治療結果下責任結論。")),
      phase("提出再治療與轉診選項","說明再治療目的、舊材料移除難度與替代方案。",
        ["評估再根管治療可行性","說明舊材料可能變硬、難移除","必要時建議 CBCT 或專科評估","比較保留、追蹤、手術與拔牙"],
        [d("病人","這顆牙還能救嗎？我不想拔掉。"),d("醫師","我理解你想保留。可以先評估再根管治療，把舊材料移除並重新清潔；但材料放置多年可能變硬，也可能有金屬或阻塞物，處理難度會提高。"),d("醫師","如果風險較高、影像仍不清楚，或處理需要顯微設備，我會建議轉診專科進一步評估。轉診不代表一定能取出，而是為了選擇對牙齒最安全的方案。")],
        good("說明限制，但不要用困難度逼迫病人接受單一方案。"),
        warn("避免：「不想拔就只能花錢轉診。」")),
      phase("形成下一步與紀錄","把今天知道與不知道的內容、病人選擇及回診安排寫清楚。",
        ["記錄症狀與臨床檢查","記錄影像客觀發現與不確定性","記錄已說明選項、病人疑問與選擇","給予回診時間與警訊"],
        [d("醫師","今天我會把症狀、影像發現、尚未確認的部分，以及我們討論的選項完整記錄。"),d("醫師","我們先安排進一步檢查與回診。如果出現腫脹、持續劇痛、發燒或咬合痛快速加重，請提前聯絡，不要等到原定時間。")],
        good("用具體時間與警訊形成閉環。"),
        warn("避免只說：「有痛再回來。」"))
    ],
    checklist:["完成症狀與病史詢問","客觀記錄高密度影像","未在證據不足時直接定性","未批評先前醫師","說明其他可能病因","說明再治療限制與轉診目的","安排明確回診與警訊","完整病歷紀錄"]
  },
  {
    id:"known", no:"03", title:"病人已認定有分離器械",
    card:"病人帶著『裡面有斷針，所以才會痛』的既定認知前來。",
    summary:"不要直接與病人爭辯，也不要附和尚未確認的因果。先承認病人的資訊與焦慮，再將『是否存在器械』與『是否造成症狀』分開評估。",
    context:["病人已聽過斷針說法","認為斷針造成疼痛","對前次治療有疑慮"],
    phases:[
      phase("承接病人的既有資訊","先讓病人完整說完他知道的內容與擔心。",
        ["詢問由誰、何時、如何告知","詢問是否有舊影像或病歷","不要立即否定病人或前醫師"],
        [d("病人","之前醫師說裡面有斷針，我現在會痛一定就是它害的。"),d("醫師","我理解你會把兩件事連在一起，也會擔心牙齒是不是因此保不住。你還記得當時醫師怎麼說、是否有提供影像或後續建議嗎？")],
        good("承認病人的感受與資訊來源，不等於同意其因果結論。"),
        warn("避免：「你不要先入為主。」")),
      phase("拆開存在與因果","說明影像材料、症狀來源與診斷仍需分開處理。",
        ["確認目前影像是否可支持器械分離","評估新感染、裂牙、修復體與根尖狀況","說明即使存在器械，也不一定是唯一病因"],
        [d("醫師","目前影像中確實有一段高密度材料，但是否就是分離器械，以及它是否造成現在的疼痛，是兩個需要分開確認的問題。"),d("醫師","我們也要檢查新的感染、牙裂、假牙邊緣與根尖周圍狀況，才能決定真正需要處理什麼。")],
        good("病人較容易接受『不是否認，而是需要完整判斷』。"),
        warn("不要說：「斷針跟疼痛完全無關。」")),
      phase("說明取出不等於成功","把目標放在感染控制、齒質保存與整體預後。",
        ["評估取出是否會犧牲過多齒質","說明可能取出、繞過、手術或追蹤","說明裂牙等問題可能改變預後"],
        [d("病人","只要把斷針拿出來，牙齒就會好嗎？"),d("醫師","不一定。取出只是可能的處理之一。真正的目標是安全地控制感染、保留足夠齒質，並處理其他可能病因。若為了取出而削除太多牙齒，反而可能增加穿孔或牙裂風險。")],
        good("用『整體治療目標』取代『取出就是成功』。"),
        warn("避免承諾專科一定可以取出。")),
      phase("比較所有可行方案","把費用、風險、可逆性與病人價值放在同一張決策桌上。",
        ["原院再治療","專科評估與顯微處理","無症狀時追蹤","根尖手術或拔牙與後續修復"],
        [d("病人","一定要轉診嗎？我擔心費用。"),d("醫師","費用是合理的考量。轉診的目的是取得更完整評估與處理能力，不代表一定移除或保證成功。"),d("醫師","我們可以比較在這裡再治療、轉診、追蹤、手術或拔牙的風險、費用與預後，再依你希望保留牙齒的程度共同決定。")],
        good("費用是決策資訊，不是施壓工具。"),
        warn("不要用『不想花錢就拔掉』簡化決策。")),
      phase("確認病人選擇與追蹤","留下完整資料，讓後續照護可以延續。",
        ["提供影像與轉診摘要","記錄病人對保留牙齒與費用的考量","安排回診或轉診後回報","給予急性警訊"],
        [d("醫師","你不需要現在立刻決定。我會把目前影像、可能病因、各方案與轉診目的整理給你。"),d("醫師","如果你選擇先取得專科意見，我也會持續追蹤結果，而不是把後續全部交給你自己處理。")],
        good("轉診是照護的延伸，不是把病人推出去。"),
        warn("避免只開一張轉診單而未說明目的與後續。"))
    ],
    checklist:["承接病人已知資訊與情緒","拆開材料存在與疼痛因果","完成其他病因評估","說明取出不等於成功","比較再治療、轉診、追蹤、手術與拔牙","說明費用與結果不確定性","提供資料並持續追蹤"]
  },
  {
    id:"disclosed", no:"04", title:"自己發生：事前已告知",
    card:"治療中發生器械分離，事前已完成風險說明與同意。",
    summary:"有同意書仍需要即時告知、承接情緒、說明已採措施及後續方案。同意書可用來回顧溝通內容，但不能當作推卸責任的擋箭牌。",
    context:["事件已發生","事前已告知","病人可能質疑責任"],
    phases:[
      phase("先穩定臨床狀況","停止不必要操作，確認事件位置與當下風險。",
        ["停止並確認器械與工作長度","評估是否繼續嘗試會增加穿孔或齒質損失","完成必要影像與初步清潔","保留器械與治療相關紀錄"],
        [d("內部處理","先確保病人安全，記錄事件發生時間、使用器械、位置、已採取措施與影像。不要為了立刻取出而進行高風險操作。")],
        good("先處理安全與事實，再開始溝通。"),
        warn("不要因害怕病人反應而拖延告知。")),
      phase("直接告知事件","使用清楚、直接、有遺憾但不閃躲的說法。",
        ["說明發生什麼","說明目前已知位置與影響","說明已採取的措施","明確表示接下來會一起討論"],
        [d("醫師","陳先生，很遺憾，剛才治療時有一小段根管器械在根管內分離。"),d("醫師","我已先停止操作、確認大致位置並做初步清潔。接下來我會把目前知道的情況、可能影響與處理方式逐一說明。"),d("病人","所以就是斷針？為什麼會發生？"),d("醫師","是，目前確認有器械分離。根管狹窄、彎曲或鈣化可能增加風險；我也會如實記錄整個治療過程與已採措施。")],
        good("已確認的事件要直接說明，不再使用模糊字眼。"),
        warn("避免只說「有一點小狀況」或把原因全部歸給病人牙齒。")),
      phase("面對憤怒與責任質疑","先承接情緒，不在診間搶著做法律結論。",
        ["允許病人表達","不打斷、不反駁","回到事實、後續照護與可驗證行動","必要時通知院內負責人"],
        [d("病人","這不是你們的醫療疏失嗎？你拿同意書出來是要推卸責任？"),d("醫師","我理解你會生氣，也會擔心責任問題。"),d("醫師","同意書不是免責文件。我拿出來是為了回顧我們治療前談過的風險與處理選項；現在我仍會負責把事件說明清楚、安排後續並完整記錄。")],
        good("先處理病人的不安，再談文件與流程。"),
        warn("禁止：「你簽過同意書，風險本來就要自己承擔。」")),
      phase("提出具體處理路徑","依器械位置、感染與風險說明立即及後續方案。",
        ["原院評估取出或繞過","專科轉診","若無症狀的追蹤計畫","若持續感染的手術或拔牙評估"],
        [d("醫師","接下來有幾條路徑：評估是否安全取出、嘗試繞過後完成清潔、轉診專科，或在感染控制可接受時追蹤。"),d("醫師","如果後續症狀持續或感染無法控制，可能還要評估手術；若牙齒本身預後不佳，也需要討論拔牙。"),d("病人","轉診一定會把它拿掉嗎？"),d("醫師","不一定。專科轉診是為了判斷最安全、最適合的方案，不是保證移除。")],
        good("每個方案都要交代目的、限制與決策點。"),
        warn("不要在未確認院所政策前承諾全部免費或保證處理成功。")),
      phase("費用、紀錄與回診","形成可執行的照護閉環。",
        ["確認院所可提供的費用安排","提供轉診資料與聯絡窗口","記錄事件、告知、病人反應與選擇","約定回診時間"],
        [d("病人","轉診的費用誰負責？"),d("醫師","你的問題合理。我不會在未確認院所安排前給你不實承諾。我會立即確認可提供的處理與費用方案，再清楚回覆你。"),d("醫師","今天的事件、影像、已採措施、我們的對話與你的選擇都會完整記錄。我們也會約定明確回診時間與聯絡窗口。")],
        good("清楚說明何時、由誰回覆費用安排。"),
        warn("不要把費用問題直接丟給轉診院所。"))
    ],
    checklist:["立即停止高風險操作並確認位置","及時直接告知事件","說明已採措施","承接病人情緒與責任疑慮","未把同意書當免責工具","說明完整處理選項","確認費用與院內流程","完整事件紀錄與回診"]
  },
  {
    id:"undisclosed", no:"05", title:"自己發生：事前未告知",
    card:"最棘手情境：事件已發生，但治療前未充分說明此風險。",
    summary:"不能假稱已說明、不能補造事前同意。要坦白承認告知不足，維持臨床照護，完成院內通報、事實紀錄與後續選項。",
    context:["事件已發生","事前告知不足","信任與爭議風險高"],
    phases:[
      phase("穩定病人並保存事實","先完成必要臨床處置與原始資料保存。",
        ["停止高風險嘗試","確認器械位置與感染狀況","保存影像、器械使用與治療紀錄","立即通知院內負責人或風險管理窗口"],
        [d("內部處理","記錄實際發生時間、器械、位置、操作與當下處置。不要修改舊紀錄，不要補寫成治療前已告知。")],
        good("事實紀錄應即時、客觀、可追溯。"),
        warn("禁止回填、刪改或補造過去日期的同意紀錄。")),
      phase("告知事件與告知不足","兩件事都要直接面對。",
        ["清楚告知器械分離","承認事前未充分說明","表達遺憾與道歉","說明現在將完整處理"],
        [d("醫師","很遺憾，剛才治療中有一小段根管器械在根管內分離。"),d("病人","為什麼治療前完全沒有人跟我說可能會這樣？"),d("醫師","你問得合理。我重新確認後，這項風險在治療前沒有被充分說明，這部分是我們告知上的不足，我很抱歉。"),d("醫師","我現在會把事件、已採取的措施、可能影響與後續選項完整說清楚，也會依院內流程處理。")],
        good("誠實承認溝通缺口，比事後合理化更能避免二次傷害。"),
        warn("禁止：「同意書應該有寫，只是你沒注意。」")),
      phase("回應『怎麼負責』","不要自行做法律結論，但必須提出具體行動。",
        ["持續提供必要臨床照護","通知院內負責人","確認處理與費用方案","提供完整資料與第二意見"],
        [d("病人","所以你們現在要怎麼負責？"),d("醫師","我不會逃避這個問題。現在先確保牙齒與你的安全，完整記錄並通知院內負責人。"),d("醫師","接著我會提出在本院處理、轉診或取得第二意見的選項，並確認院所能提供的費用與後續安排。")],
        good("用具體行動回應責任，而不是急著爭論『算不算疏失』。"),
        warn("不要要求病人事後補簽，假裝成治療前同意。")),
      phase("完整說明處理選項","仍需依臨床條件進行共享決策。",
        ["評估取出、繞過與感染控制","專科轉診或第二意見","追蹤、手術或拔牙的條件","說明各方案風險與不確定性"],
        [d("醫師","處理上仍要看器械位置、根管條件與感染狀況。可能評估取出、繞過清潔、轉診或追蹤。"),d("醫師","如果感染持續，可能需要手術；如果牙齒本身有裂紋或無法保留，也要討論拔牙。每個方案的限制我都會說清楚，不會保證單一結果。")],
        good("告知不足不代表臨床決策可以跳過風險效益評估。"),
        warn("不要為了安撫病人承諾一定取出或一定保住。")),
      phase("修復信任與持續照護","給病人時間、資料、選擇與明確聯絡方式。",
        ["允許病人暫不決定","提供影像與病歷摘要","協助安全轉診而非中斷照護","約定回覆與回診時間"],
        [d("病人","我現在很不放心，也不知道還能不能相信你們。"),d("醫師","我理解信任受到影響，你不需要現在立刻決定。"),d("醫師","你可以選擇由我們繼續處理、轉診或取得第二意見。我會提供完整影像與紀錄，協助安全轉介，並給你明確的回覆與追蹤時間。")],
        good("不要要求病人立刻恢復信任；讓後續行動可以被驗證。"),
        warn("禁止：「不信任就轉去別家。」"))
    ],
    checklist:["保存原始事實與影像","未修改或補造事前告知","坦白承認告知不足","表達遺憾與道歉","通知院內負責人","持續提供必要照護","說明所有處理與第二意見選項","確認費用與聯絡窗口","完整紀錄病人反應與後續"]
  }
];

function phase(title,goal,actions,dialogue,goodTip,warnTip){return{title,goal,actions,dialogue,goodTip,warnTip}}
function d(role,text){return{role,text}}
function good(text){return{text,type:"good"}}
function warn(text){return{text,type:"warn"}}

const tools = {
  framework:{
    title:"共通處理框架", lead:"任何情境都先依這個順序處理。越高壓，越不要跳步。",
    items:[
      ["01","先確保安全","停止可能增加傷害的操作，確認位置、症狀、影像與當下風險。"],
      ["02","區分已知與未知","已確認的事實直接說；尚未確認的影像或因果，不要過度定性。"],
      ["03","承接情緒","先回應焦慮、憤怒或保留牙齒的期待，不急著辯解責任。"],
      ["04","說明處理選項","依個案比較取出、繞過與清潔、追蹤、轉診、手術或拔牙。"],
      ["05","交代限制與費用","說明最好與最壞情況；轉診是評估與處置，不是保證移除。"],
      ["06","形成照護閉環","記錄告知、病人反應、選擇、費用、警訊、回診與聯絡窗口。"]
    ]
  },
  faq:{
    title:"病人常見追問", lead:"可直接搜尋或在診間快速開啟。以下是建議說法，不是逐字背誦稿。",
    items:[
      ["斷針會跑到心臟或腦部嗎？","一般情況下，器械片段位於牙齒根管內，不會隨血液循環跑到心臟或腦部。我們仍會確認位置並持續追蹤。"],
      ["會不會生鏽或腐蝕？","牙科根管器械使用的是醫療用金屬材料；臨床上更重要的不是『生鏽』，而是器械位置、感染是否能控制，以及後續有沒有症狀或影像變化。"],
      ["留在裡面一定會失敗嗎？","不一定。預後會受到器械位置、發生時根管的清潔程度、原本感染、牙齒裂紋與剩餘齒質等因素影響，需要個案評估與追蹤。"],
      ["取出來就一定會好嗎？","不一定。取出只是可能的處理之一；真正目標是安全控制感染並保留齒質。為了取出而削除過多牙齒，可能反而增加風險。"],
      ["為什麼會斷？","根管彎曲、狹窄、鈣化、器械反覆受力與治療中的多重因素都可能增加風險。不能只用單一原因解釋。"],
      ["轉診一定拿得出來嗎？","不一定。轉診是讓專科醫師用更完整的設備與經驗評估最合適方案，可能是取出、繞過、手術或追蹤。"],
      ["是不是醫療疏失？","我理解你會在意責任問題。這需要依完整治療事實與紀錄判斷；現在我會先把事件、已採措施與後續照護說明並記錄清楚。"],
      ["費用誰負責？","你的問題合理。我會依院所流程確認可提供的處理與費用安排，並在明確時間內回覆，不會在未確認前做不實承諾。"]
    ]
  },
  record:{
    title:"病歷紀錄模板", lead:"依實際個案修改。紀錄事實，不加入推測、責怪或法律結論。",
    items:[
      ["治療前風險告知","治療前已由醫師向病人說明：根管治療可能發生器械分離；可能相關因素；發生後可能採取取出、繞過／清潔、追蹤、轉診、手術或拔牙等方案；已說明各方案限制、預後與可能額外費用。病人提問：＿＿＿。醫師回覆：＿＿＿。病人表示理解並選擇：＿＿＿。"],
      ["影像疑似阻塞物","影像顯示：＿＿＿。另見根管內高密度影像／阻塞物，現階段僅憑影像無法確認材料性質。已向病人說明目前症狀可能原因包括：＿＿＿。已討論進一步檢查、再治療、轉診、追蹤與替代方案。病人選擇：＿＿＿。"],
      ["治療中器械分離事件","於＿＿年＿＿月＿＿日＿＿時，治療牙位＿＿，使用器械＿＿，於根管＿＿位置確認器械分離。當下已採措施：停止操作／影像確認／清潔消毒／其他＿＿。已於＿＿時向病人說明事件、目前已知影響、處理選項與不確定性。病人反應與提問：＿＿＿。後續選擇：＿＿＿。回診／轉診時間：＿＿＿。"],
      ["事前告知不足事件","已確認治療前未充分說明器械分離風險。於＿＿時向病人如實說明事件及告知不足，表達遺憾／道歉。已通知院內負責人：＿＿＿。未補造或回填事前同意。已提供臨床處置、轉診／第二意見、資料提供、費用確認與回診安排：＿＿＿。病人反應：＿＿＿。"]
    ]
  }
};

let current = {type:"home",id:null};
const app=document.querySelector("#app"), nav=document.querySelector("#case-nav"), sidebar=document.querySelector("#sidebar");
const PASSWORD_HASH=(window.BROKEN_FILE_TRAINING_CONFIG?.passwordHash||"f376e8c61d025645c37933b5cad900022f76df122a6e26455005e81cb8d8cbf9").trim().toLowerCase();
const ACCESS_PASSWORD=(window.BROKEN_FILE_TRAINING_CONFIG?.accessPassword||"endosi").trim();
const gate=document.querySelector("#password-gate"), protectedApp=document.querySelector("#protected-app");

async function digestPassword(value){
  const bytes=new TextEncoder().encode(value);
  const hash=await crypto.subtle.digest("SHA-256",bytes);
  return Array.from(new Uint8Array(hash)).map(byte=>byte.toString(16).padStart(2,"0")).join("");
}
function unlockApp(){
  gate.hidden=true;
  protectedApp.hidden=false;
  document.body.classList.add("unlocked");
}
if(sessionStorage.getItem("bf-guide-access")==="granted") unlockApp();
document.querySelector("#password-form").addEventListener("submit",event=>{
  event.preventDefault();
  const input=document.querySelector("#password-input");
  const error=document.querySelector("#password-error");
  if(input.value.trim()===ACCESS_PASSWORD){
    sessionStorage.setItem("bf-guide-access","granted");
    error.hidden=true;
    unlockApp();
    renderHome();
  }else{
    error.hidden=false;
    input.select();
  }
});
document.querySelector("#password-toggle").addEventListener("click",event=>{
  const input=document.querySelector("#password-input");
  const show=input.type==="password";
  input.type=show?"text":"password";
  event.currentTarget.textContent=show?"隱藏":"顯示";
  event.currentTarget.setAttribute("aria-label",show?"隱藏密碼":"顯示密碼");
});

function renderNav(){
  nav.innerHTML=cases.map(c=>`<button class="nav-case ${current.type==="case"&&current.id===c.id?"active":""}" data-case="${c.id}"><span>${c.no}</span><b>${c.title}</b></button>`).join("");
  document.querySelectorAll("[data-page]").forEach(b=>b.classList.toggle("active",current.type==="tool"&&current.id===b.dataset.page));
}
function renderHome(){
  current={type:"home",id:null}; renderNav();
  app.innerHTML=`<section class="home"><p class="eyebrow">CLINICAL COMMUNICATION GUIDE</p><h1>分離器械<br>逐步處理與對話指引</h1><p class="home-lead">不是測驗。選擇臨床情境後，依序查看當下要做什麼、怎麼說、病人可能怎麼追問，以及病歷要留下什麼。</p><div class="notice"><b>使用原則：</b>建議說法需依個案事實調整。已確認的事件應直接告知；尚未確認的影像與因果則需保留不確定性。</div><div class="home-grid">${cases.map(c=>`<button class="home-card" data-case="${c.id}"><span class="index">${c.no}</span><h2>${c.title}</h2><p>${c.card}</p><small>開啟完整指引 →</small></button>`).join("")}</div></section>`;
  /*
  document.querySelector(".home-lead").insertAdjacentHTML("afterend",'<div class="guide-meta"><span>???? v1.1</span><span>???? 2026-07-11</span><span>????????</span></div>');
  document.querySelector(".notice").insertAdjacentHTML("afterend",'<button class="quick-hero-button" data-action="quick"><b>30 ?????</b><span>????????????????????????? ?</span></button>');
  */
  document.querySelector(".home-lead").insertAdjacentHTML("afterend",'<div class="guide-meta"><span>\u5167\u5bb9\u7248\u672c v1.1</span><span>\u6700\u5f8c\u5be9\u95b1 2026-07-11</span><span>\u53f0\u7063\u81e8\u5e8a\u6559\u5b78\u60c5\u5883</span></div>');
  document.querySelector(".notice").insertAdjacentHTML("afterend",'<button class="quick-hero-button" data-action="quick"><b>30 \u79d2\u5feb\u901f\u8655\u7406</b><span>\u8a3a\u9593\u7576\u4e0b\u5148\u770b\uff1a\u73fe\u5728\u505a\u4ec0\u9ebc\u3001\u7b2c\u4e00\u53e5\u600e\u9ebc\u8aaa\u3001\u54ea\u53e5\u4e0d\u80fd\u8aaa \u2192</span></button>');
  window.scrollTo(0,0);
}
function renderQuick(){
  current={type:"quick",id:null}; renderNav();
  /*
  app.innerHTML=`<section class="tool-page quick-page"><p class="eyebrow">30-SECOND ACTION GUIDE</p><h1>30 ?????</h1><p class="tool-lead">???????????????????????????????????</p><div class="quick-case-grid">${cases.map(c=>{const p=c.phases[0];const firstDoctor=p.dialogue.find(line=>line.role==="??")||p.dialogue[0];return `<article class="quick-case"><div class="quick-case-head"><span>${c.no}</span><h2>${c.title}</h2></div><div class="quick-block"><b>????</b><ol>${p.actions.slice(0,3).map(x=>`<li>${x}</li>`).join("")}</ol></div><div class="quick-block say"><b>????????</b><p>${firstDoctor.text}</p><button class="copy-block" data-copy="${encodeURIComponent(firstDoctor.text)}">????</button></div><div class="quick-block stop"><b>?????</b><p>${p.warnTip.text.replace(/^(??|??)[?:]?/,"")}</p></div><button class="open-full" data-case="${c.id}">?????? ?</button></article>`}).join("")}</div></section>`;
  */
  app.innerHTML=`<section class="tool-page quick-page"><p class="eyebrow">30-SECOND ACTION GUIDE</p><h1>30 \u79d2\u5feb\u901f\u8655\u7406</h1><p class="tool-lead">\u5148\u7a69\u4f4f\u7576\u4e0b\uff0c\u518d\u958b\u555f\u5b8c\u6574\u6307\u5f15\u3002\u6bcf\u5f35\u5361\u53ea\u4fdd\u7559\u7acb\u5373\u884c\u52d5\u3001\u7b2c\u4e00\u53e5\u8a71\u8207\u7981\u5fcc\u8aaa\u6cd5\u3002</p><div class="quick-case-grid">${cases.map(c=>{const p=c.phases[0];const firstDoctor=p.dialogue.find(line=>line.role==="\u91ab\u5e2b")||p.dialogue[0];return `<article class="quick-case"><div class="quick-case-head"><span>${c.no}</span><h2>${c.title}</h2></div><div class="quick-block"><b>\u73fe\u5728\u5148\u505a</b><ol>${p.actions.slice(0,3).map(x=>`<li>${x}</li>`).join("")}</ol></div><div class="quick-block say"><b>\u7b2c\u4e00\u53e5\u53ef\u4ee5\u9019\u6a23\u8aaa</b><p>${firstDoctor.text}</p><button class="copy-block" data-copy="${encodeURIComponent(firstDoctor.text)}">\u8907\u88fd\u9019\u53e5</button></div><div class="quick-block stop"><b>\u9019\u53e5\u4e0d\u8981\u8aaa</b><p>${p.warnTip.text.replace(/^(?:\u907f\u514d|\u7981\u6b62)[\uFF1A:]?/,"")}</p></div><button class="open-full" data-case="${c.id}">\u958b\u555f\u5b8c\u6574\u6307\u5f15 \u2192</button></article>`}).join("")}</div></section>`;
  window.scrollTo(0,0);
}

function renderCase(id,phaseIndex=null){
  const c=cases.find(x=>x.id===id); current={type:"case",id}; renderNav();
  app.innerHTML=`<article class="guide"><header class="guide-title"><p class="eyebrow">CASE ${c.no}</p><h1>${c.title}</h1><p class="summary">${c.summary}</p><div class="context-strip">${c.context.map(x=>`<span>${x}</span>`).join("")}</div></header><nav class="quick-jump">${c.phases.map((p,i)=>`<a href="#phase-${i}">${i+1}. ${p.title}</a>`).join("")}<a href="#final-check">最後檢核</a></nav>${c.phases.map(renderPhase).join("")}<section class="phase" id="final-check"><div class="phase-head"><span class="phase-number">✓</span><div><h2>離開診間前檢核</h2><p class="phase-goal">確認說明、選擇、紀錄與追蹤均已形成閉環。</p></div></div><div class="checklist">${c.checklist.map((x,i)=>`<label><input type="checkbox" data-check="${c.id}-${i}"><span>${x}</span></label>`).join("")}</div></section><div class="guide-footer"><h3>這份指引的重點</h3><p>不要急著證明自己沒錯。先確保安全、說清楚事實、承接病人情緒，再提供可執行的選項與追蹤。</p></div></article>`;
  restoreChecks(c.id);
  window.scrollTo(0,0);
  if(phaseIndex!==null) requestAnimationFrame(()=>document.querySelector(`#phase-${phaseIndex}`)?.scrollIntoView({behavior:"smooth"}));
}
function renderPhase(p,i){
  return `<section class="phase" id="phase-${i}"><div class="phase-head"><span class="phase-number">${i+1}</span><div><h2>${p.title}</h2><p class="phase-goal">${p.goal}</p></div></div><ol class="action-list">${p.actions.map(x=>`<li>${x}</li>`).join("")}</ol><div class="dialogue">${p.dialogue.map(line=>`<div class="line ${line.role==="病人"?"patient":"doctor"}"><strong>${line.role}</strong>${line.text}<button class="copy-line" data-copy="${encodeURIComponent(line.text)}">複製</button></div>`).join("")}</div><div class="tip-grid"><div class="tip good"><b>建議重點</b>${p.goodTip.text}</div><div class="tip warn"><b>避免這樣說</b>${p.warnTip.text}</div></div></section>`;
}
function renderTool(id){
  const t=tools[id]; current={type:"tool",id}; renderNav();
  let body="";
  if(id==="framework") body=`<div class="framework-grid">${t.items.map(x=>`<div class="framework-item"><strong>${x[0]}</strong><div><h2>${x[1]}</h2><p>${x[2]}</p></div></div>`).join("")}</div>`;
  if(id==="faq") body=`<div class="faq-list">${t.items.map(x=>`<article class="faq-item"><h2>${x[0]}</h2><p>${x[1]}</p><button class="copy-block" data-copy="${encodeURIComponent(x[1])}">複製建議說法</button></article>`).join("")}</div>`;
  if(id==="record") body=`<div class="record-sections">${t.items.map(x=>`<article class="record-card"><h2>${x[0]}</h2><div class="record-template">${x[1]}</div><button class="copy-block" data-copy="${encodeURIComponent(x[1])}">複製模板</button></article>`).join("")}</div>`;
  app.innerHTML=`<section class="tool-page"><p class="eyebrow">QUICK REFERENCE</p><h1>${t.title}</h1><p class="tool-lead">${t.lead}</p>${body}</section>`;
  window.scrollTo(0,0);
}
function saveCheck(input){const data=JSON.parse(localStorage.getItem("bf-guide-checks")||"{}");data[input.dataset.check]=input.checked;localStorage.setItem("bf-guide-checks",JSON.stringify(data))}
function restoreChecks(id){const data=JSON.parse(localStorage.getItem("bf-guide-checks")||"{}");document.querySelectorAll(`[data-check^="${id}-"]`).forEach(x=>x.checked=Boolean(data[x.dataset.check]))}
function allSearchData(){
  const rows=[];
  cases.forEach(c=>c.phases.forEach((p,i)=>{rows.push({caseId:c.id,phaseIndex:i,label:c.title,title:p.title,text:[p.goal,...p.actions,...p.dialogue.map(x=>x.text),p.goodTip.text,p.warnTip.text].join(" ")})}));
  tools.faq.items.forEach(x=>rows.push({page:"faq",label:"病人常見追問",title:x[0],text:x[1]}));
  tools.record.items.forEach(x=>rows.push({page:"record",label:"病歷紀錄模板",title:x[0],text:x[1]}));
  return rows;
}
function search(q){
  const box=document.querySelector("#search-results"); if(!q.trim()){box.innerHTML='<div class="empty-search">輸入關鍵字，快速找到對話與處理步驟。</div>';return}
  const key=q.trim().toLowerCase(), results=allSearchData().filter(x=>(x.title+" "+x.text).toLowerCase().includes(key)).slice(0,20);
  box.innerHTML=results.length?results.map(x=>`<button class="search-result" ${x.caseId?`data-case="${x.caseId}"`:`data-page="${x.page}"`}><small>${x.label}</small><b>${x.title}</b><p>${x.text.slice(0,110)}…</p></button>`).join(""):'<div class="empty-search">找不到相符內容。</div>';
  {const caseResults=results.filter(x=>x.caseId);box.querySelectorAll("[data-case]").forEach((button,index)=>button.dataset.phase=caseResults[index].phaseIndex);}
}
document.addEventListener("click",async e=>{
  const caseBtn=e.target.closest("[data-case]"); if(caseBtn){const phase=caseBtn.dataset.phase===undefined?null:Number(caseBtn.dataset.phase);renderCase(caseBtn.dataset.case,phase);closeOverlays();return}
  const pageBtn=e.target.closest("[data-page]"); if(pageBtn){renderTool(pageBtn.dataset.page);closeOverlays();return}
  const copy=e.target.closest("[data-copy]"); if(copy){await navigator.clipboard.writeText(decodeURIComponent(copy.dataset.copy));const old=copy.textContent;copy.textContent="已複製";copy.classList.add("copied");setTimeout(()=>{copy.textContent=old;copy.classList.remove("copied")},1200);return}
  const action=e.target.closest("[data-action]")?.dataset.action;
  if(action==="home")renderHome();
  if(action==="quick")renderQuick();
  if(action==="toggle-nav")sidebar.classList.toggle("open");
  if(action==="search"){document.querySelector("#search-modal").hidden=false;document.querySelector("#search-input").focus();search("")}
  if(action==="close-search")document.querySelector("#search-modal").hidden=true;
});
document.addEventListener("change",e=>{if(e.target.matches("[data-check]"))saveCheck(e.target)});
document.querySelector("#search-input").addEventListener("input",e=>search(e.target.value));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeOverlays();if((e.ctrlKey||e.metaKey)&&e.key==="k"){e.preventDefault();document.querySelector('[data-action="search"]').click()}});
function closeOverlays(){sidebar.classList.remove("open");document.querySelector("#search-modal").hidden=true}
renderHome();
