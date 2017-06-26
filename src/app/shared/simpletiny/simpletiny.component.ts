import {
  Component, OnInit, OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-simple-tiny',
  templateUrl: './simpletiny.component.html',
  styleUrls: ['./simpletiny.component.css']
})
export class SimpleTinyComponent implements OnInit, AfterViewInit {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  @Input() content: string;
  public editor: any;
  constructor() { }

  ngAfterViewInit() {
    tinymce.baseURL = "/assets/tinymce";
    tinymce.init({

      selector: '#' + this.elementId,
      language: 'vi_VN',
      skin_url: '/assets/tinymce/skins/lightgray',
      language_url: '/assets/tinymce/langs/vi_VN.js',
      plugins: "autosave autolink code codesample colorpicker emoticons fullscreen hr image imagetools media preview table textcolor wordcount",
      toolbar: "imageupload forecolor cut copy paste fontselect styleselect bold italic bold link preview code image",
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
        editor.on('init', () => {
          editor.setContent(this.content);
        });
      },

    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
