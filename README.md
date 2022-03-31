
BackEnd Source

@PostMapping(value = "/insertBoard")
   public String insertBoardPOST(
         @RequestParam(value = "file", required = false) List<MultipartFile> multipartFiles,
         @RequestPart(value = "testobject", required = false) BoardVO boardVO
//         @RequestParam("testcontent") String testcontent
         ) throws JsonProcessingException {
      String path = "";
      log.info("BoardController-insertBoardPOST 호출2 : 저장 시도 첨부파일 : " + multipartFiles + "\n");
//      log.info("BoardController-insertBoardPOST 호출2 : 저장 시도 첨부파일 : " + boardVO + ", " + testcontent + "\n");
      log.info("BoardController-insertBoardPOST 호출2 : 저장 시도 첨부파일 : " + boardVO);
      if (multipartFiles != null) {
         BoardImageVO boardImageVO = new BoardImageVO();
         List<BoardImageVO> imageList = new ArrayList<BoardImageVO>();
         for(MultipartFile file : multipartFiles) {
            log.info("새로운 BoardImageVO file: " + file);
            String saveName2 = file.getOriginalFilename();
            log.info("saveName : " + saveName2);
         }
         log.info("새로운 BoardImageVO 객체 생성 완료 : " + boardImageVO);
         try {
            if (os.contains("win")) {
               path = "C:/image/";
               log.info("wind path");
            } else {
               path = "/resources/Back/";
               log.info("linux path");
            }
            String saveName = Long.toString(System.nanoTime()) + "_" + multipartFiles.get(0).getOriginalFilename();
            log.info("saveName : " + saveName);

            if (path != null && path != "") {
               File target = new File(path, saveName);
               int boardMaxIdx = boardService.selectMaxIdx();
               multipartFiles.get(0).transferTo(target);
               boardImageVO.setBoardImage_oriName(multipartFiles.get(0).getOriginalFilename());
               log.info("생성한 BoardImageVO 객체 내 BoardImage_oriName set완료 : " + boardImageVO);
               boardImageVO.setBoardImage_saveName(saveName);
               log.info("생성한 BoardImageVO 객체 내 BoardImage_saveName set완료 : " + boardImageVO);
               boardImageVO.setBoard_idx(boardMaxIdx);
//               boardImageService.insertBoardImage(boardImageVO);
               log.info("board_idx 외래키 set 작업한 BoardImageVO 저장 \n");
            }
         } catch (IOException e) {
            e.printStackTrace();
         }
      } // if (multipartFile != null && multipartFile.getSize() > 0) {
      return "return";
   }















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
